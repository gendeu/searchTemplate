$(function() {
  // Focus Styling
  const $input = $('.styled-input.multi input');

  $input.on('focus', function() {
    $(this).parent().parent().addClass('active');
  });
  $input.on('focusout', function() {
    $(this).parent().parent().removeClass('active');
  });
  
  // Set data attribute to use for styling label when not a required field
  $('.styled-input.multi input').blur(function() {
    if ($(this).val()) {
      $(this).attr('filled', 'true');
    } else {
      $(this).attr('filled', 'false');
    }
  });
  
});