!function (d) {
    var b = '[data-toggle="dropdown"]', a = function (f) {
        var e = d(f).on("click.dropdown.data-api", this.toggle);
        d("html").on("click.dropdown.data-api", function () {
            e.parent().removeClass("open")
        })
    };
    a.prototype = {constructor: a, toggle: function (j) {
        var i = d(this), h, f, g;
        if (i.is(".disabled, :disabled")) {
            return
        }
        f = i.attr("data-target");
        if (!f) {
            f = i.attr("href");
            f = f && f.replace(/.*(?=#[^\s]*$)/, "")
        }
        h = d(f);
        h.length || (h = i.parent());
        g = h.hasClass("open");
        c();
        if (!g) {
            h.toggleClass("open")
        }
        return false
    }};
    function c() {
        d(b).parent().removeClass("open")
    }

    d.fn.dropdown = function (e) {
        return this.each(function () {
            var g = d(this), f = g.data("dropdown");
            if (!f) {
                g.data("dropdown", (f = new a(this)))
            }
            if (typeof e == "string") {
                f[e].call(g)
            }
        })
    };
    d.fn.dropdown.Constructor = a;
    d(function () {
        d("html").on("click.dropdown.data-api", c);
        d("body").on("click.dropdown", ".dropdown form", function (f) {
            f.stopPropagation()
        }).on("click.dropdown.data-api", b, a.prototype.toggle)
    })
}(window.jQuery);
!function (c) {
    var b = '[data-dismiss="alert"]', a = function (d) {
        c(d).on("click", b, this.close)
    };
    a.prototype.close = function (i) {
        var h = c(this), f = h.attr("data-target"), g;
        if (!f) {
            f = h.attr("href");
            f = f && f.replace(/.*(?=#[^\s]*$)/, "")
        }
        g = c(f);
        i && i.preventDefault();
        g.length || (g = h.hasClass("alert") ? h : h.parent());
        g.trigger(i = c.Event("close"));
        if (i.isDefaultPrevented()) {
            return
        }
        g.removeClass("in");
        function d() {
            g.trigger("closed").remove()
        }

        c.support.transition && g.hasClass("fade") ? g.on(c.support.transition.end, d) : d()
    };
    c.fn.alert = function (d) {
        return this.each(function () {
            var f = c(this), e = f.data("alert");
            if (!e) {
                f.data("alert", (e = new a(this)))
            }
            if (typeof d == "string") {
                e[d].call(f)
            }
        })
    };
    c.fn.alert.Constructor = a;
    c(function () {
        c("body").on("click.alert.data-api", b, a.prototype.close)
    })
}(window.jQuery);
!function (c) {
    var b = function (e, d) {
        this.init("tooltip", e, d)
    };
    b.prototype = {constructor: b, init: function (k, h, f) {
        var l, d, j, e, g;
        this.type = k;
        this.$element = c(h);
        this.options = this.getOptions(f);
        this.enabled = true;
        j = this.options.trigger.split(" ");
        for (g = j.length; g--;) {
            e = j[g];
            if (e == "click") {
                this.$element.on("click." + this.type, this.options.selector, c.proxy(this.toggle, this))
            } else {
                if (e != "manual") {
                    l = e == "hover" ? "mouseenter" : "focus";
                    d = e == "hover" ? "mouseleave" : "blur";
                    this.$element.on(l + "." + this.type, this.options.selector, c.proxy(this.enter, this));
                    this.$element.on(d + "." + this.type, this.options.selector, c.proxy(this.leave, this))
                }
            }
        }
        this.options.selector ? (this._options = c.extend({}, this.options, {trigger: "manual", selector: ""})) : this.fixTitle()
    }, getOptions: function (d) {
        d = c.extend({}, c.fn[this.type].defaults, this.$element.data(), d);
        if (d.delay && typeof d.delay == "number") {
            d.delay = {show: d.delay, hide: d.delay}
        }
        return d
    }, enter: function (h) {
        var g = c.fn[this.type].defaults, f = {}, d;
        this._options && c.each(this._options, function (e, i) {
            if (g[e] != i) {
                f[e] = i
            }
        }, this);
        d = c(h.currentTarget)[this.type](f).data(this.type);
        if (!d.options.delay || !d.options.delay.show) {
            return d.show()
        }
        clearTimeout(this.timeout);
        d.hoverState = "in";
        this.timeout = setTimeout(function () {
            if (d.hoverState == "in") {
                d.show()
            }
        }, d.options.delay.show)
    }, leave: function (f) {
        var d = c(f.currentTarget)[this.type](this._options).data(this.type);
        if (this.timeout) {
            clearTimeout(this.timeout)
        }
        if (!d.options.delay || !d.options.delay.hide) {
            return d.hide()
        }
        d.hoverState = "out";
        this.timeout = setTimeout(function () {
            if (d.hoverState == "out") {
                d.hide()
            }
        }, d.options.delay.hide)
    }, show: function () {
        var i, k, g, j, d, h, f = c.Event("show");
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(f);
            if (f.isDefaultPrevented()) {
                return
            }
            i = this.tip();
            this.setContent();
            if (this.options.animation) {
                i.addClass("fade")
            }
            d = typeof this.options.placement == "function" ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement;
            i.detach().css({top: 0, left: 0, display: "block"});
            this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element);
            k = this.getPosition();
            g = i[0].offsetWidth;
            j = i[0].offsetHeight;
            switch (d) {
                case"bottom":
                    h = {top: k.top + k.height, left: k.left + k.width / 2 - g / 2};
                    break;
                case"top":
                    h = {top: k.top - j, left: k.left + k.width / 2 - g / 2};
                    break;
                case"left":
                    h = {top: k.top + k.height / 2 - j / 2, left: k.left - g};
                    break;
                case"right":
                    h = {top: k.top + k.height / 2 - j / 2, left: k.left + k.width};
                    break
            }
            this.applyPlacement(h, d);
            this.$element.trigger("shown")
        }
    }, applyPlacement: function (g, h) {
        var i = this.tip(), e = i[0].offsetWidth, l = i[0].offsetHeight, d, j, k, f;
        i.offset(g).addClass(h).addClass("in");
        d = i[0].offsetWidth;
        j = i[0].offsetHeight;
        if (h == "top" && j != l) {
            g.top = g.top + l - j;
            f = true
        }
        if (h == "bottom" || h == "top") {
            k = 0;
            if (g.left < 0) {
                k = g.left * -2;
                g.left = 0;
                i.offset(g);
                d = i[0].offsetWidth;
                j = i[0].offsetHeight
            }
            this.replaceArrow(k - e + d, d, "left")
        } else {
            this.replaceArrow(j - l, j, "top")
        }
        if (f) {
            i.offset(g)
        }
    }, replaceArrow: function (f, e, d) {
        this.arrow().css(d, f ? (50 * (1 - f / e) + "%") : "")
    }, setContent: function () {
        var e = this.tip(), d = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](d);
        e.removeClass("fade in top bottom left right")
    }, hide: function () {
        var d = this, g = this.tip(), f = c.Event("hide");
        this.$element.trigger(f);
        if (f.isDefaultPrevented()) {
            return
        }
        g.removeClass("in");
        function h() {
            var e = setTimeout(function () {
                g.off(c.support.transition.end).detach()
            }, 500);
            g.one(c.support.transition.end, function () {
                clearTimeout(e);
                g.detach()
            })
        }

        c.support.transition && this.$tip.hasClass("fade") ? h() : g.detach();
        this.$element.trigger("hidden");
        return this
    }, fixTitle: function () {
        var d = this.$element;
        if (d.attr("title") || typeof(d.attr("data-original-title")) != "string") {
            d.attr("data-original-title", d.attr("title") || "").attr("title", "")
        }
    }, hasContent: function () {
        return this.getTitle()
    }, getPosition: function () {
        var d = this.$element[0];
        return c.extend({}, (typeof d.getBoundingClientRect == "function") ? d.getBoundingClientRect() : {width: d.offsetWidth, height: d.offsetHeight}, this.$element.offset())
    }, getTitle: function () {
        var f, d = this.$element, e = this.options;
        f = d.attr("data-original-title") || (typeof e.title == "function" ? e.title.call(d[0]) : e.title);
        return f
    }, tip: function () {
        return this.$tip = this.$tip || c(this.options.template)
    }, arrow: function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, validate: function () {
        if (!this.$element[0].parentNode) {
            this.hide();
            this.$element = null;
            this.options = null
        }
    }, enable: function () {
        this.enabled = true
    }, disable: function () {
        this.enabled = false
    }, toggleEnabled: function () {
        this.enabled = !this.enabled
    }, toggle: function (f) {
        var d = f ? c(f.currentTarget)[this.type](this._options).data(this.type) : this;
        d.tip().hasClass("in") ? d.hide() : d.show()
    }, destroy: function () {
        this.hide().$element.off("." + this.type).removeData(this.type)
    }};
    var a = c.fn.tooltip;
    c.fn.tooltip = function (d) {
        return this.each(function () {
            var g = c(this), f = g.data("tooltip"), e = typeof d == "object" && d;
            if (!f) {
                g.data("tooltip", (f = new b(this, e)))
            }
            if (typeof d == "string") {
                f[d]()
            }
        })
    };
    c.fn.tooltip.Constructor = b;
    c.fn.tooltip.defaults = {animation: true, placement: "top", selector: false, template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: false, container: false};
    c.fn.tooltip.noConflict = function () {
        c.fn.tooltip = a;
        return this
    }
}(window.jQuery);
if (window.console === undefined) {
    var f = function (a) {
        try {
            throw (a)
        } catch (b) {
        }
    };
    window.console = {log: f, warn: f, error: f, info: f}
}
$(function () {
    var a = $.browser;
    if (a.webkit) {
        $("body").addClass("webkit")
    } else {
        if (a.mozilla) {
            $("body").addClass("mozilla")
        } else {
            if (a.msie) {
                $("body").addClass("ie").addClass("ie" + parseInt(a.version, 10))
            }
        }
    }
    if (window.mobile) {
        $("body").addClass("mobile")
    }
    if ($(".dropdown .username").length && typeof $().ellipsis != "undefined") {
        $(".dropdown .username").ellipsis()
    }
});