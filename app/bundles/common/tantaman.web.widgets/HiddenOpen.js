define(['libs/backbone'], function(Backbone) {
  return Backbone.View.extend({
    className: 'dispNone',
    events: {
      "change input[type='file']": '_fileChosen'
    },
    initialize: function(triggerElem, cb) {
      this._cb = cb;
      if (triggerElem != null) {
        return triggerElem.on('click', this.trigger.bind(this));
      }
    },
    trigger: function(cb) {
      if (cb != null) {
        this._cb = cb;
      }
      return this.$input.click();
    },
    _fileChosen: function(e) {
        //返回选择的文件，URL解析后从数据库取得的JSON传到这里？
      var f;
      f = e.target.files[0];
      return this._cb(f);
    },
    render: function() {
      this.$input = $('<input type="file"></input>');
      this.$el.html(this.$input);
      return this;
    }
  });
});
