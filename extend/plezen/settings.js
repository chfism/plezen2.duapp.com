$(document).ready(function(){function a(a){var b=$("input[name^='first_name']").val(),c=$(".current-email").text();$.ajax({type:"POST",url:"users/changename",cache:!1,data:{username:b,email:c},success:function(){layer.msg(a,1,1)},error:function(a,b,c){layer.msg("text status "+b+", err "+c)}})}function b(a){var b=$("textarea[name^='about_text']").val(),c=$(".current-email").text();$.ajax({type:"POST",url:"users/changeprofile",cache:!1,data:{profile:b,email:c},success:function(){layer.msg(a,1,1)},error:function(a,b,c){layer.msg("text status "+b+", err "+c)}})}function c(){alert("changelanguage")}function d(){alert("changeemail")}function e(a){var b=i18n.t("settinglang.pwdnotsame"),c=i18n.t("settinglang.pwdinvalid"),d=$(".current-email").text(),e=$("input[name^='new_password1']").val(),g=$("input[name^='new_password2']").val();return f(e)?void(e!=g?layer.msg(b,1,1):$.ajax({type:"POST",url:"users/changepwd",cache:!1,data:{pwd:e,email:d},success:function(){layer.msg(a,1,1)},error:function(a,b,c){layer.msg("text status "+b+", err "+c)}})):void layer.msg(c,1,1)}function f(a){var b=/^[x00-x7f]+$/;return b.test(a)?a.length<6||a.length>16?!1:!0:!1}$(".well").click(function(f){var g=$(f.currentTarget),h=$(f.target),i=g.find(".form-actions.with-buttons");if(h.hasClass("btn"))if(h.hasClass("btn-primary")){var j=i18n.t("settinglang.updatesuccess");switch(h.attr("id")){case"changename":a(j);break;case"changeprofile":b(j);break;case"changelanguage":c(j);break;case"changeemail":d(j);break;case"changepassword":e(j);break;default:alert("error")}}else i.slideUp();else i.slideDown()})});