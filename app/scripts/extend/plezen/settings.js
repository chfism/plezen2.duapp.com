$(document).ready(function () {
    $(".well").click(function (e) {
        var f = $(e.currentTarget), input = $(e.target), div = f.find(".form-actions.with-buttons");
        if (input.hasClass("btn")) {
            if (input.hasClass("btn-primary")) {
                var updatesuccess = i18n.t("settinglang.updatesuccess");
                switch (input.attr('id')) {
                    case "changename":
                        changename(updatesuccess);
                        break;
                    case "changeprofile":
                        changeprofile(updatesuccess);
                        break;
                    case "changelanguage":
                        changelanguage(updatesuccess);
                        break;
                    case "changeemail":
                        changeemail(updatesuccess);
                        break;
                    case "changepassword":
                        changepassword(updatesuccess);
                        break;
                    default:
                        alert("error");
                }
            }
            else {
                div.slideUp()
            }
        } else {
            div.slideDown()
        }
    });


    function changename(updatesuccess) {
        var username = $("input[name^='first_name']").val();
        var email = $(".current-email").text();
        $.ajax({
            type: "POST",
            url: "users/changename",
            cache: false,
            data: {username: username, email: email},
            success: function (data) {
                layer.msg(updatesuccess, 1, 1);
            },
            error: function (jqXHR, textStatus, err) {
                layer.msg('text status ' + textStatus + ', err ' + err)
            }
        });
    }

    function changeprofile(updatesuccess) {
        var profile = $("textarea[name^='about_text']").val();
        var email = $(".current-email").text();
        $.ajax({
            type: "POST",
            url: "users/changeprofile",
            cache: false,
            data: {profile: profile, email: email},
            success: function (data) {
                layer.msg(updatesuccess, 1, 1);
            },
            error: function (jqXHR, textStatus, err) {
                layer.msg('text status ' + textStatus + ', err ' + err)
            }
        });
    }

    function changelanguage(updatesuccess) {
        alert("changelanguage");
    }

    function changeemail(updatesuccess) {
        alert("changeemail");
    }

    function changepassword(updatesuccess) {
        var pwdnotsame = i18n.t("settinglang.pwdnotsame");
        var pwdinvalid = i18n.t("settinglang.pwdinvalid");
        var email = $(".current-email").text();
        var pwd = $("input[name^='new_password1']").val();
        var pwd2 = $("input[name^='new_password2']").val();
        if (!checkValidPasswd(pwd)) {
            layer.msg(pwdinvalid, 1, 1);
            return;
        }
        if (pwd != pwd2) {
            layer.msg(pwdnotsame, 1, 1);
        }
        else {
            $.ajax({
                type: "POST",
                url: "users/changepwd",
                cache: false,
                data: {pwd: pwd, email: email},
                success: function (data) {
                    layer.msg(updatesuccess, 1, 1);
                },
                error: function (jqXHR, textStatus, err) {
                    layer.msg('text status ' + textStatus + ', err ' + err)
                }
            })
        }
    }

    function checkValidPasswd(str) {
        var reg = /^[x00-x7f]+$/;
        if (!reg.test(str)) {
            return false;
        }
        if (str.length < 6 || str.length > 16) {
            return false;
        }
        return true;
    }
});