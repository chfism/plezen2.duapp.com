define(function () {
    function MenuItem(options) {
        this.$el = $('<li><a>' + options.title + ' ' +
            ((options.hotkey) ? '<span class="label pull-right">' + options.hotkey + '</span>' : '')
            + '</a></li>');

        this.$el.click(function () {
            if (options.modal) {
                if (options.save == true && localStorage.getItem('filename') != "undefined") //保存功能
                {
                    //直接保存
                    options.modal.noshow(options.handler, options.title, options.model);
                }
                else { //另存为 传option.model为了取得preview
                    options.modal.show(options.handler, options.title, options.model);
                }
            }
            else
                options.handler(options.model);
        });
    }

    MenuItem.prototype = {
        render: function () {
            return this;
        }
    };

    return MenuItem;
});