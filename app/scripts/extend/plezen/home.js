/*! http://mths.be/placeholder v2.0.7 by @mathias */
(function (i, k, f) {
    var b = Object.prototype.toString.call(i.operamini) == "[object OperaMini]";
    var a = "placeholder" in k.createElement("input") && !b;
    var g = "placeholder" in k.createElement("textarea") && !b;
    var l = f.fn;
    var e = f.valHooks;
    var c = f.propHooks;
    var n;
    var m;
    if (a && g) {
        m = l.placeholder = function () {
            return this
        };
        m.input = m.textarea = true
    } else {
        m = l.placeholder = function () {
            var p = this;
            p.filter((a ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({"focus.placeholder": d, "blur.placeholder": h}).data("placeholder-enabled", true).trigger("blur.placeholder");
            return p
        };
        m.input = a;
        m.textarea = g;
        n = {get: function (q) {
            var p = f(q);
            var r = p.data("placeholder-password");
            if (r) {
                return r[0].value
            }
            return p.data("placeholder-enabled") && p.hasClass("placeholder") ? "" : q.value
        }, set: function (q, s) {
            var p = f(q);
            var r = p.data("placeholder-password");
            if (r) {
                return r[0].value = s
            }
            if (!p.data("placeholder-enabled")) {
                return q.value = s
            }
            if (s == "") {
                q.value = s;
                if (q != o()) {
                    h.call(q)
                }
            } else {
                if (p.hasClass("placeholder")) {
                    d.call(q, true, s) || (q.value = s)
                } else {
                    q.value = s
                }
            }
            return p
        }};
        if (!a) {
            e.input = n;
            c.value = n
        }
        if (!g) {
            e.textarea = n;
            c.value = n
        }
        f(function () {
            f(k).delegate("form", "submit.placeholder", function () {
                var p = f(".placeholder", this).each(d);
                setTimeout(function () {
                    p.each(h)
                }, 10)
            })
        });
        f(i).bind("beforeunload.placeholder", function () {
            f(".placeholder").each(function () {
                this.value = ""
            })
        })
    }
    function j(q) {
        var p = {};
        var r = /^jQuery\d+$/;
        f.each(q.attributes, function (t, s) {
            if (s.specified && !r.test(s.name)) {
                p[s.name] = s.value
            }
        });
        return p
    }

    function d(q, r) {
        var p = this;
        var s = f(p);
        if (p.value == s.attr("placeholder") && s.hasClass("placeholder")) {
            if (s.data("placeholder-password")) {
                s = s.hide().next().show().attr("id", s.removeAttr("id").data("placeholder-id"));
                if (q === true) {
                    return s[0].value = r
                }
                s.focus()
            } else {
                p.value = "";
                s.removeClass("placeholder");
                p == o() && p.select()
            }
        }
    }

    function h() {
        var t;
        var p = this;
        var s = f(p);
        var r = this.id;
        if (p.value == "") {
            if (p.type == "password") {
                if (!s.data("placeholder-textinput")) {
                    try {
                        t = s.clone().attr({type: "text"})
                    } catch (q) {
                        t = f("<input>").attr(f.extend(j(this), {type: "text"}))
                    }
                    t.removeAttr("name").data({"placeholder-password": s, "placeholder-id": r}).bind("focus.placeholder", d);
                    s.data({"placeholder-textinput": t, "placeholder-id": r}).before(t)
                }
                s = s.removeAttr("id").hide().prev().attr("id", r).show()
            }
            s.addClass("placeholder");
            s[0].value = s.attr("placeholder")
        } else {
            s.removeClass("placeholder")
        }
    }

    function o() {
        try {
            return k.activeElement
        } catch (p) {
        }
    }
}(this, document, jQuery));
window.isMobile = window.isMobile || navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/);
window.isAppleDevice = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i);
window.isIPad = navigator.userAgent.match(/iPad/);
window.disableCTAJS = window.disableCTAJS || false;
window.fixedTopGraphicTopPosition = window.fixedTopGraphicTopPosition || false;
var getMaxTestimonialCarouselItemHeight = function () {
    var a = 0;
    $("div.p-testimonial-item").each(function (c, d) {
        var b = $(d).height();
        if (b > a) {
            a = b
        }
    });
    return a
};
var handleResize = function () {
    var a = $(".p-above-fold").height(), b;
    if (window.innerHeight > a) {
        b = Math.max(0, window.innerHeight - a);
        $(".p-signupbox").css("bottom", b)
    } else {
        b = window.innerHeight - a;
        $(".p-signupbox").css("bottom", b)
    }
    $(".p-signupbox-adjust-top").each(function (d, e) {
        var c = (window.innerHeight - $(e).height()) / 2;
        if ($(e).is($(".p-signupbox-modal-dialog"))) {
            c = ((window.innerHeight - 416) / 2) - 30
        }
        $(e).css("top", c)
    })
};
var handleScroll = function () {
    var b = $(".p-topmenu").innerHeight(), a = $(".p-above-fold").height(), c = $(".p-scrollmenu");
    var d = $(document).scrollTop();
    if (window.innerWidth < 1200) {
        c.hide();
        return
    }
    if (d > Math.min(window.innerHeight, a) - b) {
        c.slideDown()
    } else {
        c.slideUp()
    }
};
//var fitTopGraphic = function () {
//    var a = $(".p-top-graphic");
//    if (isMobile) {
//        a = $(".p-header-background-image")
//    }
//    a.each(function () {
//        fitToViewPort($(this))
//    })
//};
var fitToViewPort = function (d) {
    var e = d.parent(), g = 16 / 9, f = e.width(), b = e.height(), a = {}, c = {};
    if (f / b <= g) {
        a.height = "100%";
        a.width = "auto"
    } else {
        a.height = "auto";
        a.width = "100%"
    }
    d.css(a);
    setTimeout(function () {
        var i = d.width();
        c.left = Math.min(0, (f - i) / 2);
        if (!window.fixedTopGraphicTopPosition) {
            var h = d.height();
            c.top = Math.min(0, (b - h) / 2)
        }
        d.css(c)
    }, 1)
};
var logSignUpClicked = function (a) {
    $.feature_log("signup.signup_clicked." + a)
};
var signupButtonTopClicked = function () {
    logSignUpClicked("top")
};
var signupButtonScrollMenuClicked = function (a) {
    clickScrollMenuLogo(a);
    logSignUpClicked("scrollmenu")
};
var signupButtonBottomClicked = function (a) {
    clickScrollMenuLogo(a);
    logSignUpClicked("bottom")
};
var signupButtonMobileTopClicked = function () {
    niceScrollToMobileSignupForm();
    logSignUpClicked("mobile_top")
};
var signupButtonMobileBottomClicked = function () {
    fastScrollToMobileSignupForm();
    logSignUpClicked("mobile_bottom")
};
var clickLearnMore = function (b) {
    b.preventDefault();
    var c = 0, a = $(document).scrollTop();
    if (window.innerWidth >= 1200) {
        c = $(".p-scrollmenu").outerHeight()
    }
    $("body,html").stop().animate({scrollTop: $(".p-above-fold").height() - c}, 1000, "swing", function () {
        var d = $(document).scrollTop();
        if (a == d) {
            $(document).scrollTop($(".p-above-fold").height() - c)
        }
    })
};
var clickScrollMenuLogo = function (b) {
    b.preventDefault();
    var a = $(document).scrollTop();
    $("body,html").stop().animate({scrollTop: 0}, 1000, "swing", function () {
        var c = $(document).scrollTop();
        if (a == c) {
            $(document).scrollTop(0)
        }
    })
};
var fastScrollToMobileSignupForm = function () {
    scrollToMobileSignupForm(false)
};
var niceScrollToMobileSignupForm = function () {
    scrollToMobileSignupForm(true)
};
var scrollToMobileSignupForm = function (c) {
    function d() {
        $(".p-below-fold-section").addClass("p-grey-gradient-background");
        var g = $("#p-signup-button-mobile-top");
        g.animate({opacity: "0"}, 400, function () {
            g.attr("disabled", "disabled")
        });
        $(".p-mobile-signup-form").slideDown(700, function () {
            $('input[name="first_name"]').focus()
        })
    }

    function b() {
        $(".p-mobile-signup-appstore").slideUp(300, d)
    }

    var a = b;
    if (!c) {
        $(".p-mobile-signup-appstore").hide();
        a = d
    }
    var f = $(".p-mobile-signup").offset().top;

    function e(h) {
        var g = Math.abs(window.pageYOffset - h);
        return(1 / g) * g * 1000
    }

    $("body,html").stop().animate({scrollTop: f}, e(f), "swing", a)
};
var carouselPrevious = function () {
    $(this).carousel("prev")
};
var carouselNext = function () {
    $(this).carousel("next")
};
var setupCarousels = function () {
    for (var a = 0; a < arguments.length; a++) {
        if (arguments[a].length) {
            arguments[a].carousel({interval: 7000});
            arguments[a].swiperight(carouselPrevious);
            arguments[a].swipeleft(carouselNext)
        }
    }
};
var swapActiveElement = function (b, a) {
    b.insertAfter(a);
    b.removeClass("active");
    a.addClass("active")
};
var showWindowsComputerAsFirstOptionInProductSlider = function () {
    var a = $(".p-product-slide-link-mac");
    var b = $(".p-product-slide-link-windows");
    var d = $(".p-product-item-mac");
    var c = $(".p-product-item-windows");
    swapActiveElement(a, b);
    swapActiveElement(d, c);
    a.attr("data-slide-to", "1");
    b.attr("data-slide-to", "0")
};
var checkIfMac = function () {
    if (!window.isAppleDevice) {
        showWindowsComputerAsFirstOptionInProductSlider();
        $(".p-footer-product").attr("href", "/windows/")
    } else {
        $(".p-footer-product").attr("href", "/mac/")
    }
    if (window.isIPad) {
        $(".p-mobile-signup-appstore").hide().removeClass("hidden").slideDown(500)
    }
};
var checkMobile = function () {
    if (window.isMobile) {
        $("video").remove();
        $(".p-product-slide-image").removeClass("hidden");
        $(".p-header-background-image").removeClass("hidden");
        $(".p-above-fold").addClass("mobile")
    } else {
        $("video").removeClass("hidden")
    }
    $(".p-mobile-signup-form").hide().removeClass("hidden")
};
$(document).ready(function () {
    checkMobile();
    checkIfMac();
//    fitTopGraphic();
    handleResize();
    $("input").placeholder();
    $(window).resize(handleResize);
    $(document).scroll(handleScroll);
//    $(window).resize(fitTopGraphic);
    $(".p-learn").click(clickLearnMore);
    $(".p-scrollmenu-logo").click(clickScrollMenuLogo);
    if (!disableCTAJS) {
        $("#p-signup-button-scrollmenu").click(signupButtonScrollMenuClicked);
        $("#p-signup-button-bottom").click(signupButtonBottomClicked);
        $("#p-signup-button-top").click(signupButtonTopClicked);
        $("#p-signup-button-mobile-top").click(signupButtonMobileTopClicked);
        $("#p-signup-button-mobile-bottom").click(signupButtonMobileBottomClicked)
    }
    setupCarousels($("#carousel-product"), $("#carousel-testimonials"))
});
window.onerror = function myErrorHandler(c, b, a) {
    $.log({name: "exception", levelname: "WARN", msg: b + ":" + a + " " + c});
    return true
};
