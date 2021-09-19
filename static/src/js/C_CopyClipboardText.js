odoo.define('w-test.C-CopyClipboardText', function (require) {

  var fieldRegistry = require('web.field_registry');
  var AbstractField = require('web.AbstractField');
  var basic_fields = require('web.basic_fields');

  var C_CopyClipboardText = basic_fields.TextCopyClipboard.extend({
    // template: 'C_CopyClipboardText',
    events: _.extend({}, AbstractField.prototype.events, {
      'click .o_clipboard_button': '_onBtnClick'
    }),
    _onBtnClick: function (ev) {
      alert('congrates you just copied: '+ this.value)
    }
  })

  fieldRegistry.add('C_CopyClipboardText', C_CopyClipboardText);
  return C_CopyClipboardText;

})