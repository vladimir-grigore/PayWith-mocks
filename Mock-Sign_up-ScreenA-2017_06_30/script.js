$(document).ready(function() {

  // Display info label if the input field has been filled
  $(".form-input").on("keyup", function(){
    if($(this).val() == ''){
      $(this).prev().removeClass("shown");
      validateForm();
    } else {
      $(this).prev().addClass("shown");
      validateForm();
    }
  });

  // Enable the submit button if all inputs in the form have been filled
  function validateForm() {
    if($("#pin").val() !== '' &&
       $("#name").val() !== '' &&
       $("#email").val() !== '' &&
       $("#password").val() !== '' &&
       $("#birthday").val() !== '') {
      $("#submit").removeAttr("disabled");
    } else {
      $("#submit").attr("disabled", true);
    }
  }

});