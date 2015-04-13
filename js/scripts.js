jQuery(document).ready(function() {
  $("#first").focus();
  $("#contact-form").submit(function(event) {

    var firstName = $("input#first").val();
    var lastName = $("input#last").val();
    var phone = $("input#phone").val();
    var contact = { firstName: firstName, lastName: lastName, phone: phone };

    $("ul#contact-list").append("<li><span class='contact'>" +
      contact.firstName + " " + contact.lastName + "</span></li>");

    $('.contact').last().click(function() {
      $('#show-contact').toggle();
      $('#show-contact h2').text(contact.firstName + ' ' + contact.lastName);
      $('.first-name').text(contact.firstName);
      $('.last-name').text(contact.lastName);
      $('.phone').text(contact.phone);
    });

    $("input#first").val("");
    $("input#last").val("");
    $("input#phone").val("");

    $('#contact-list').show();
    event.preventDefault();
  });
});
