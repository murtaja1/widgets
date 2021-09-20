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

       var tag = document.createElement("div");
       tag.classList.add('copy-text')
       tag.innerHTML = ('You copied: <br>'+ `<h4>${this.value}</h4>`);

       var element = document.querySelector(".o_clipboard_button")
       element.appendChild(tag)
       setTimeout(function(){
          element.innerHTML = '<span class="fa fa-clipboard"></span><span> Copy Text</span>'
        }, 2000)
       
    }
  })

  fieldRegistry.add('C_CopyClipboardText', C_CopyClipboardText);
  return C_CopyClipboardText;

})