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
  
//   // Error Handler
//   var $headerSearchPeople = $('#header-search-people');
//   var REQUEST_DELAY = 300; // ms
//   if ($headerSearchPeople.length !== 0) {

//     $headerSearchPeople.validate({
//       validClass: "success",
//       ignore: "",
//       rules: {
//         fn: {
//           required: true,
//           notEmail: true,
//           noEmptySpacesOnly: true,
//           atLeastOneLetter: true,
//         },
//         ln: {
//           required: true,
//           notEmail: true,
//           noEmptySpacesOnly: true,
//           atLeastOneLetter: true,
//         },
//         "city": {
//           notEmail: true,
//           emptyOrletters: true,
//         },
//       },
//       messages: {
//         fn: "Please enter a first name",
//         ln: "Please enter a last name",
//         city: "Please enter a valid city",
//       },

//       onkeyup: false,
//       onclick: false,
//       onsubmit: true,
//       submitHandler: function (form) {
//         // trackNL("Submitted Search Form - People");
//         window.setTimeout(function () {
//           dataArray = $(form).serializeArray();
//           var formVals = {};
//           _.forEach(dataArray, function (v, k) {
//             formVals[v.name] = v.value;
//           });

//           var data = _.mapValues(formVals, cleanSearchValues);
//           //data = parseMiddleInitial(data);

//           // form.submit();
//           // window.location.href = $(form).attr('action') + '?' + $.param(data);
//         }, REQUEST_DELAY);
//       }
//     });

//   }
  
//   // Check for errors and apply error classes when search submit button clicked
//   $('#submit_btn').click(function() {
//     setTimeout(function() {
//       errorCheck();
//       if($('.styled-input.multi input').hasClass('error')) {
//         $('.styled-input.multi').addClass('error');
//       }
//     }, 10);
//   });
  
//   function errorCheck(){
//     if($('#fn').hasClass('error')){
//       $('#fn').parent().addClass('error');
//     } else{
//       $('#fn').parent().removeClass('error');
//     };
//     if($('#ln').hasClass('error')){
//       $('#ln').parent().addClass('error');
//     } else{
//       $('#ln').parent().removeClass('error');
//     };
//     if($('#city').hasClass('error')){
//       $('#city').parent().addClass('error');
//     } else{
//       $('#city').parent().removeClass('error');
//     };
//   }
});