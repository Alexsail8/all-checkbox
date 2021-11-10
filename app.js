
$(document).on('change', 'input[type=checkbox]', function () {
  var thiss = $(this),
    thiss = thiss[0],

    nameAttr = thiss.getAttribute('data-name'), // получаем значение собственного аттрибута(для удобство можно переключиться на класс)
    checkedsEl = $('input[data-name="'+nameAttr+'"'), // выберем все элементы с нужным значение атрибута
    all = checkedsEl.filter(".allcheckbox-js");
    
  if (thiss.classList.contains('allcheckbox-js')) {
    checkedsEl.prop('checked', $(this).prop('checked'));
  } 
  else switch (checkedsEl.filter(":checked").length) {
    case +all.prop('checked'):
      all.prop('checked', false).prop('indeterminate', false);
      break;
    case checkedsEl.length - !! $(this).prop('checked'):
      all.prop('checked', true).prop('indeterminate', false);
      break;
    default:
      all.prop('indeterminate', true);
  }
});
