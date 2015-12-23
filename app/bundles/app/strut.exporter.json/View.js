define(['libs/backbone', 'common/FileUtils', 'lang'],
    function (Backbone, FileUtils, lang) {
        'use strict';

        return Backbone.View.extend({
            initialize: function () {


                this.name = lang.projectname;
                this._rendered = false;
                /*
                 TODO: handle browsers that can't do the download attribute.  Safari?
                 */
                this._dlSupported = window.dlSupported;

//			this.$el.html('<div class="alert alert-info">' + lang.strut_exporter_json.explain + '</div>');
//			if (this._dlSupported) {
//				this.$el.append('<div class="alert alert-success">' + lang.strut_exporter_json.click_below + '</div>');
//			}
                var defaultname = $("#projectname").val();
                if (defaultname == null) {
                    defaultname = "undefined";
                }
                this.$el.html('<input type=\"text\" id=\"fileName\" class=\"fileName\" placeholder=\"' + defaultname + '\"></input>');

            },

            show: function ($container, $modal, $editormodel) {
                this._$modal = $modal;
                var $ok = this._$modal.find('.ok');
//			if (this._dlSupported) {
                $ok.html('<i class="icon-download-alt icon-white"></i>');
                this._makeDownloadable($ok, $editormodel);
//			} else {
//				$ok.html('');
//				if (window.hasFlash)
//					this._populateDownloadify();
//				else
//					this._populateTextArea();
//			}


                $container.append(this.$el);
            },


            noshow: function ($container, $modal, $editormodel) {
                this._$modal = $modal;
                var b = JSON.stringify(this._exportable.export(), null, 2);
                var preview="";
                if ($editormodel != null) {
                    this._deck = $editormodel.deck();
                    this._generators = $editormodel.registry.getBest('strut.presentation_generator.GeneratorCollection');
                    preview = this._generators[0].generate(this._deck);
                    preview = preview.replace(/(\n)+|(\r\n)+/g, "");
                }
                var plezenid = $("#plezenid").val();
                $.ajax({
                    url: '/impress/update',
                    type: 'POST',
                    cache: false,
                    data: { plezenid: plezenid, content: b.toString(), preview: preview, server: location.origin},
                    success: function (data) {
                        alert(lang.savesuccess);
                    },
                    error: function (jqXHR, textStatus, err) {
                        alert('text status ' + textStatus + ', err ' + err)
                    }
                });

            },

            _makeDownloadable: function ($ok, $editormodel) {
//			var attrs = FileUtils.createDownloadAttrs('application\/json',
//				JSON.stringify(this._exportable.export(), null, 2),
//				this._exportable.identifier() + '.json');
                var b = JSON.stringify(this._exportable.export(), null, 2);
                var preview="";
                if ($editormodel != null) {
                    this._deck = $editormodel.deck();
                    this._generators = $editormodel.registry.getBest('strut.presentation_generator.GeneratorCollection');
                    preview = this._generators[0].generate(this._deck);
                    preview = preview.replace(/(\n)+|(\r\n)+/g, "");
                }

                var a = $ok[0];

                $ok.off("click");
                $ok.click(function () {
                    var name = $("#fileName").val();
                    var email = $("#user").val();
                    if(preview=="")
                    {
                        alert("Error, Please try play Plezen once");
                        return;
                    }
                    if(name=="")
                    {
                        name="untitled";
                    }
                    $.ajax({
                        url: '/impress/create',
                        type: 'POST',
                        cache: false,
                        data: { email: email, name: name, content: b.toString(), preview: preview, server:location.origin },
                        success: function (data) {
                            alert(lang.savesuccess);
                            //设置local filename, 保存菜单取不到该值，显示另存为菜单
                            localStorage.setItem('filename', name);
                            $(".close").click();
                        },
                        error: function (jqXHR, textStatus, err) {
                            alert('text status ' + textStatus + ', err ' + err)
                        }
                    });
                    return
                });
                //a.download = attrs.download
                //a.href = attrs.href
                //a.dataset.downloadurl = attrs.downloadurl

            },

            _populateTextArea: function () {
                var $txt = this.$el.find('textarea');
                if ($txt.length == 0) {
                    $txt = $('<textarea style="width: 500px; height: 200px;"></textarea>');
                    this.$el.append($txt);
                }

                $txt.val(JSON.stringify(this._exportable.export()));
            },

            _populateDownloadify: function () {
                var $dlify = this.$el.find('#downloadify');
                if ($dlify.length == 0) {
                    $dlify = $('<p id="downloadify"></p>');
                    this.$el.append($dlify);
                    console.log('Puplating downloadify');
                    var self = this;
                    setTimeout(function () {
                        Downloadify.create($dlify[0], {
                            filename: function () {
                                return self._exportable.identifier() + '.json';
                            },
                            data: function () {
                                return JSON.stringify(self._exportable.export(), null, 2);
                            },
                            onComplete: function () {

                            },
                            onCancel: function () {

                            },
                            onError: function () {
                                alert('Error exporting');
                            },
                            swf: 'preview_export/download_assist/downloadify.swf',
                            downloadImage: 'preview_export/download_assist/download.png',
                            width: 100,
                            height: 30,
                            transparent: false,
                            append: false
                        });
                    }, 0);
                }
            },

            hide: function () {
                this.$el.detach();
                this.hidden();
            },

            hidden: function () {
                // clean up the download link / text area
                if (this._dlSupported) {
                    var $ok = this._$modal.find('.ok');
                    window.URL.revokeObjectURL($ok.attr('href'));
                } else {
                    this.$el.find('textarea').val('');
                }
            },

            render: function () {
                // anything really to render?
            },

            constructor: function JsonExportView(exportable) {
                this._exportable = exportable;
                Backbone.View.prototype.constructor.call(this);
            }
        });
    });