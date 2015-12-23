/**
 * Created by Humphrey on 14-10-28.
 */
$(document).ready(function () {

    var deletesuccess;
    var deleteconfirm;
    var choosetpl;
    var shareplezen;
    var settoken;
    var setpublic;
    var orderbyname,orderbyname2,orderbyupdate,orderbyupdate2,orderbycreate,orderbycreate2;

    $.i18n.init({
    }, function (t) {
        deletesuccess = i18n.t("yourlang.deletesuccess");
        deleteconfirm = i18n.t("yourlang.deleteconfirm");
        choosetpl = i18n.t("yourlang.choosetpl");
        shareplezen = i18n.t("yourlang.shareplezen");
        settoken = i18n.t("yourlang.settoken");
        setpublic = i18n.t("yourlang.setpublic");
        orderbyname=i18n.t("yourlang.orderbyname");
        orderbyname2=i18n.t("yourlang.orderbyname2");
        orderbyupdate=i18n.t("yourlang.orderbyupdate");
        orderbyupdate2=i18n.t("yourlang.orderbyupdate2");
        orderbycreate=i18n.t("yourlang.orderbycreate");
        orderbycreate2=i18n.t("yourlang.orderbycreate2");
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        var dropdown = document.querySelector("#sortoption");

        dropdown.textContent = orderbycreate;
        if(hashes.length==2) {
            switch (hashes[1].slice(2)) {
                case "n":
                    dropdown.textContent = orderbyname;
                    break;
                case "n2":
                    dropdown.textContent = orderbyname2;
                    break;
                case "u":
                    dropdown.textContent = orderbyupdate;
                    break;
                case "u2":
                    dropdown.textContent = orderbyupdate2;
                    break;
                case "i":
                    dropdown.textContent = orderbycreate;
                    break;
                case "i2":
                    dropdown.textContent = orderbycreate2;
                    break;
                default:
                    dropdown.textContent = orderbycreate2;
            }
        }
        $("#q").val(getQueryVal());
    });
    $.extend({
        getUrlVars: function(){
            var vars = [], hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for(var i = 0; i < hashes.length; i++){
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars;
        },
        getUrlVar: function(name){
            return $.getUrlVars()[name];
        }
    });

    var composeUrlParams=function(){
        var param='';
        $.each($.getUrlVars(), function(i, item) {
            if(item!='p'){
                var val=$.getUrlVar(item);
                if(val) param += "&" + item+"="+val;
            }
        });
        return param;
    }

    var getQueryVal=function(){
        var param='';
        $.each($.getUrlVars(), function(i, item) {
            if(item='q'){
                var val=$.getUrlVar(item);
                if(val) param = val;
            }
        });
        return param;
    }

    var page = $('#page1');
    var options = {
        currentPage: page.attr('pageNum'),
        totalPages: page.attr('pageCount'),
        numberOfPages: page.attr('numberOfPages'),
        alignment: "center",
        pageUrl: function (type, page, current) {
            return "/your?p=" + page + composeUrlParams();
        }
    }
    page.bootstrapPaginator(options);

    $(".quick-delete").click(function () {
        var id = $(this).attr("name");
        $.layer({
            shade: [0],
            area: ['auto', 'auto'],
            dialog: {
                msg: deleteconfirm,
                btns: 2,
                type: 4,
                btn: ['Yes', 'No'],
                yes: function () {
                    var email = $("#user").val();
                    $.ajax({
                        type: "POST",
                        url: "impress/delete",
                        cache: false,
                        data: {id: id, email: email},
                        success: function (data) {
                            layer.msg(deletesuccess, 1, 1);
                            setTimeout("window.location.reload()", 1000);
                        },
                        error: function (jqXHR, textStatus, err) {
                            layer.msg('text status ' + textStatus + ', err ' + err, 1, 1);
                        }
                    });
                }, no: function () {
                }
            }
        });
    });

    $("#new-plezen").click(function () {
        $.layer({
            type: 1,
            shade: [0],
            area: ['auto', 'auto'],
            title: choosetpl,
            border: [10, 0.3, '#000'],
            shift: 'top',
            page: {dom: '.tpl'}
        });
    });

    $(".share").click(function () {
        var link = this.getAttribute('link');
        document.querySelector('#sharelink').value = location.origin + link;
        document.querySelector('#openlink').href = location.origin + link;
        $.layer({
            type: 1,
            shade: [0],
            area: ['auto', '600'],
            title: shareplezen,
            border: [10, 0.3, '#000'],
            shift: 'top',
            page: {dom: '.sharepanel'}
        });
        var code = this.getAttribute('code');
        if (code != undefined) {
            document.querySelector('#set-code').value = code;
        }

        document.querySelector('#permselect').value = "2";
        document.getElementById('share-modify-permissions').style.display = "none";
        document.getElementById('share-modify-code').style.display = "none";
        document.getElementById('share-modify-public').style.display = "block";
    });

    $(".user-list-entry").mouseenter(function () {
            $(".contact-email-container").removeClass("contact-hide");
            $(".contact-permission-detail").removeClass("contact-hide");
        }
    )

    $(".user-list-entry").mouseleave(function () {
            $(".contact-email-container").addClass("contact-hide");
            $(".contact-permission-detail").addClass("contact-hide");
        }
    )

    $("#sortdropdown li a").click(function () {
        if(window.location.href.indexOf('?')<0)
        {
            window.location.href=window.location.href+"?p=1&s="+$(this).attr('s');
        }
        else
        {
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            window.location.href=window.location.href.replace(window.location.search,'?')+hashes[0]+"&s="+$(this).attr('s');
        }
        $('#sort').html('<i class="icon-settings"></i>  <span class="allprezis-caption">' + $(this).text() + '</span> <span class="caret lpad-5"></span>');
    })

    $("#permdropdown li a").click(function () {
        var html = $(this).html();
        if (html.indexOf('editor') > 0) {
            $('#btn-add-perm-dropdown').html('<span id="active-selection"> <i class="icon-edit" id="selected-permission"></i> <i>' + $(this).text() + '</i></span><span class="caret"></span>');
        }
        else {
            $('#btn-add-perm-dropdown').html('<span id="active-selection"> <i class="icon-eye" id="selected-permission"></i> <i>' + $(this).text() + '</i></span><span class="caret"></span>');
        }
    })

    $("#permselect").click(function (e) {
        var value = e.currentTarget.value;
        if (value == 0) {
            document.getElementById('share-modify-permissions').style.display = "none";
            document.getElementById('share-modify-code').style.display = "block";
            document.getElementById('share-modify-public').style.display = "none";
        }
        else if (value == 1) {
            document.getElementById('share-modify-permissions').style.display = "block";
            document.getElementById('share-modify-code').style.display = "none";
            document.getElementById('share-modify-public').style.display = "none";
            alert("Not Implemented");
        }
        else if (value == 2) {
            document.getElementById('share-modify-permissions').style.display = "none";
            document.getElementById('share-modify-code').style.display = "none";
            document.getElementById('share-modify-public').style.display = "block";
        }

    })

    $("#set-code-btn").click(function (e) {
        var token = $("#set-code").val();
        var plezenid = document.querySelector('#openlink').href;
        plezenid = plezenid.substring(plezenid.lastIndexOf("/") + 1);
        $.ajax({
            type: "POST",
            url: "impress/token",
            cache: false,
            data: {plezenid: plezenid, token: token},
            success: function (data) {
                alert(settoken);
                location.reload()
            },
            error: function (jqXHR, textStatus, err) {

            }
        });
    })

    $("#set-public-btn").click(function (e) {
        var token = "";
        var plezenid = document.querySelector('#openlink').href;
        plezenid = plezenid.substring(plezenid.lastIndexOf("/") + 1);
        $.ajax({
            type: "POST",
            url: "impress/token",
            cache: false,
            data: {plezenid: plezenid, token: token},
            success: function (data) {
                alert(setpublic);
                location.reload()
            },
            error: function (jqXHR, textStatus, err) {

            }
        });
    });

    $("#add-btn").click(function (e) {
        alert("Not Implemented");
    });
})