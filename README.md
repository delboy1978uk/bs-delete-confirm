# Bootstrap Delete Confirm
Bootstrap delete confirmation modal
Description
===========
This plugin stops an href from leaving the page and brings up a Bootstrap modal asking if you are sure you wish to perform the action. Clicking ok follows the link, clicking cancel doesn't. Simple!
Usage
=====
```javascript
$(document).ready(function(){
  $('.delete_class').deleteConfirm();
});
```
Options
=======
```javascript
{
  message: "Are you sure you wish to perform this action?",
  ok_text: "Proceed",
  cancel_text: "Back"
}
```
