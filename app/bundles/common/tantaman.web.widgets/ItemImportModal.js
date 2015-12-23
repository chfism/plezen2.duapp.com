/*
 @author Matt Crinklaw-Vogt
 */
define(['libs/backbone', 'libs/imgup', 'lang'],
    function (Backbone, Imgup, lang) {
        var modalCache = {};
        var reg = /^[a-z]+:/;
        var imgup = new Imgup('847de02274cba30');

        var ignoredVals = {
            'http:': true,
            'http://': true,
            'file:': true,
            '/': true,
            'https://': true,
            'https:': true
        };

        var Modal = Backbone.View.extend({
            className: "itemGrabber modal hide",
            events: {
                "click .preview": "choosePic",
                "click .ok": "okClicked",
                "click div[data-option='browse']": "browseClicked",
                "click div[data-option='search']": "searchClicked",
                "change input[type='file']": "fileChosen",
                "keyup input[name='itemUrl']": "urlChanged",
                "paste input[name='itemUrl']": "urlChanged",
                "hidden": "hidden",
                "dragover": "_dragover",
                "drop": "_drop",
                "dragleave": "_dragleave"
            },

            choosePic: function () {
                var imgSrc = arguments[0].target.currentSrc;
                this.$el.find("input[name='itemUrl']").val(imgSrc);
                this.$el.find(arguments[0].target).addClass("imgborder").siblings().removeClass("imgborder")
                this.$input.val(imgSrc);
                this.urlChanged({
                    which: -1
                });
                //arguments.addClass("test")
            },

            initialize: function () {
                this.loadItem = _.debounce(this.loadItem.bind(this), 200);
            },

            // 弹出框
            show: function (cb) {
                this.options.pics = [];
                this.$el.html(JST["tantaman.web.widgets/ItemImportModal"](this.options));
                this.$el.find("input[name='itemUrl']").val("");
                this.$el.find(".ok").addClass("disabled");
                this.cb = cb;
                return this.$el.modal('show');
            },

            // 插入搜索图片
            okClicked: function () {
                if (!this.$el.find(".ok").hasClass("disabled")) {
                    if (this.file != null) {
                        this.cb({
                            file: this.file,
                            src: this.src
                        });
                    } else {
                        this.cb(this.src);
                    }

                    return this.$el.modal('hide');
                }
            },

            _dragover: function (e) {
                e.stopPropagation();
                e.preventDefault();
                e.originalEvent.dataTransfer.dropEffect = 'copy';

                this.$droparea.addClass('active');
            },

            _dragleave: function (e) {
                this.$droparea.removeClass('active');
            },

            _drop: function (e) {
                this.$droparea.removeClass('active');
                e.stopPropagation();
                e.preventDefault();
                var f = e.originalEvent.dataTransfer.files[0];

                this._fileChosen(f);
            },

            fileChosen: function (e) {
                var f, reader,
                    _this = this;
                f = e.target.files[0];

                this._fileChosen(f);
            },

            _fileChosen: function (f) {
                if (!f.type.match('image.*'))
                    return;
                //单张图片不超过200K
                if (f.size > 200 * 1024) {
                    alert(lang.oversize);
                    return;
                }

                this.item.src = '';
                var _this = this;


                /*if (this.options.hasStorage()) {
                 var url = URL.createObjectURL(f);
                 this.$input.val(url);
                 this.item.src = url;
                 URL.revokeObjectURL(url);
                 this.file = f;
                 }*/
                /*
                 this._switchToProgress();
                 debugger;
                 imgup.upload(f).progress(function(ratio) {
                 debugger;
                 _this._updateProgress(ratio);
                 }).then(function(result) {
                 debugger;
                 _this._switchToThumbnail();
                 //_this.$input.val(result);
                 _this.urlChanged({
                 which: -1
                 });
                 }, function() {
                 debugger;
                 _this._updateProgress(0);
                 _this._switchToThumbnail();
                 _this.$input.val('Failed to upload image to imgur');
                 });

                 */
                var formdata = new FormData();
                formdata.append('image', f);

                $.ajax({
                    url: '/image/upload',
                    type: 'POST',
                    cache: false,
                    data: formdata,
                    contentType: false,
                    processData: false,
                    beforeSend: function () {
                        _this._switchToProgress();

                    },
                    success: function (data) {

                        _this._switchToThumbnail();
                        _this.$input.val(data.url);
                        _this.urlChanged({
                            which: -1
                        });

                    },
                    error: function (jqXHR, textStatus, err) {
                        alert('text status ' + textStatus + ', err ' + err)
                    }
                });

                return

            },

            browseClicked: function () {
                debugger
                return this.$el.find('input[type="file"]').click();
            },

            //            setHeader: function(xhr) {
            //            xhr.setRequestHeader('Authorization', 'Basic <Your Azure Marketplace Key(Remember');
            //            },

            // 搜索图片
            searchClicked: function () {
                //Primary Account Key	Lz7CGFA2unnIHDvG+yGP5d6NPGvM6leoYOWP5zOJQYc
                var accountKeyEncoded = "Okx6N0NHRkEydW5uSUhEdkcreUdQNWQ2TlBHdk02bGVvWU9XUDV6T0pRWWM=";
                var query = this.$el.find("input[name='itemUrl']").val();//this.$input.val();

                var requestStr = "https://api.datamarket.azure.com/Bing/Search/v1/Image?$top=10&Query=%27" + query + "%27&Market=%27zh-CN%27&ImageFilters=%27Size%3AMedium%27";

                $.ajax({
                    type: 'GET',
                    url: requestStr,
                    dataType: "json",
                    context: this,
                    beforeSend: function (xhr) {
                        this._switchToProgress();
                        xhr.setRequestHeader('Authorization', 'Basic ' + accountKeyEncoded);
                    },
                    success: function (data, status) {
                        var imgSrc = data.d.results[0].MediaUrl;
                        var title = data.d.results[0].Title;
                        this.options.pics = [];
                        for (var i = 0; i < data.d.results.length; i++) {
                            if (i == 9) {
                                break;
                            }
                            this.options.pics.push({ "path": data.d.results[i].MediaUrl });
                        }

                        this.$el.html(JST["tantaman.web.widgets/ItemImportModal"](this.options));
                        this.$el.find("input[name='itemUrl']").val(imgSrc);
                        this.$el.find(".preview").first().addClass("imgborder");//val(imgSrc);
                        this._switchToThumbnail();
                        this.$input.val(imgSrc);
                        this.urlChanged({
                            which: -1
                        });

                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert(textStatus);
                    }
                });
            },

            hidden: function () {
                if (this.$input != null) {
                    this.item.src = '';
                    this.file = null;
                    return this.$input.val("");
                }
            },
            urlChanged: function (e) {

                if (e.which === 13) {
                    this.src = this.$input.val();
                    return this.okClicked();
                } else {
                    if (this.$input.val().length > 10) { //大于个字符才开始加载
                        this.loadItem();
                    }
                }
            },
            loadItem: function () {
                var val = this.$input.val();

                if (val in ignoredVals)
                    return;

                var r = reg.exec(val);
                if (r == null || r.index != 0) {
                    if (val !== '')
                        val = 'http://' + val;
                }

                if (this.item.src != val)
                    this.item.src = val;

                return this.src = this.item.src;
            },
            _itemLoadError: function () {
                this.$el.find(".ok").addClass("disabled");
                //页面加载错误导致插入图片页面上的alert显示
//                return this.$el.find(".alert").removeClass("dispNone");
            },
            _itemLoaded: function () {
                this.$el.find(".ok").removeClass("disabled");
                return this.$el.find(".alert").addClass("dispNone");
            },
            // should probably just make a sub component to handle progress
            _updateProgress: function (ratio) {
                this.$progressBar.css('width', ratio * 100 + '%');
            },
            _switchToProgress: function () {
                this.$thumbnail.addClass('dispNone');
                this.$progress.removeClass('dispNone');
            },
            _switchToThumbnail: function () {
                this.$progress.addClass('dispNone');
                this.$thumbnail.removeClass('dispNone');
            },
            render: function () {
                var _this = this;
                this.$el.html(JST["tantaman.web.widgets/ItemImportModal"](this.options));
                this.$el.modal();
                this.$el.modal("hide");

                this.item = this.$el.find(this.options.tag)[0];


                if (this.options.tag === "video") {
                    //this.$el.find(".modal-body").prepend("<div class='alert alert-success'>Supports <strong>webm & YouTube</strong>.<br/>Try out: http://www.youtube.com/watch?v=vHUsdkmr-SM</div>");
                    this.$el.find(".modal-body").prepend(lang.videoprompt);
                }
                if (!this.options.ignoreErrors) {
                    this.item.onerror = function () {
                        return _this._itemLoadError();
                    };
                    this.item.onload = function () {
                        return _this._itemLoaded();
                    };
                }

                this.$input = this.$el.find("input[name='itemUrl']");
                this.$progress = this.$el.find('.progressloading');
                this.$progressBar = this.$progress.find('.bar');
                this.$thumbnail = this.$el.find('.thumbnail');
                this.$droparea = this.$el.find('.droparea');

                return this.$el;
            },
            constructor: function ItemImportModal() {
                Backbone.View.prototype.constructor.apply(this, arguments);
            }
        });

        return {
            get: function (options) {
                //暂时注释，搜索图片和插入图片公用img的tag,但是options的其他属性不同
                //                var previous = modalCache[options.tag];
                var previous = modalCache[options.name];
                if (!previous) {
                    previous = new Modal(options);
                    previous.$el.bind('destroyed', function () {
                        delete modalCache[options.tag];
                    });

                    modalCache[options.tag] = previous;

                    previous.render();
                    $('#modals').append(previous.$el);
                }

                return previous;
            },

            ctor: Modal
        };
    });
