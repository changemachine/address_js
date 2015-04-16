$(document).ready(function() {
    // REVEAL "ADD NEW ADDRESS" FIELDS
    $("#add-address").click(function() {
        $("#extra-address-form").append('<div class="new-address">' +
             '<div class="form-group">' +
                '<select class ="addressType">' +
                    '<option id="type" value="Address">' + "Address Type" + '</option>' +
                    '<option id="home" value="Home">' + "Home" + '</option>' +
                    '<option id="office" value="Office">' + "Office" + '</option>' +
                    '<option id="vacation" value="Vacay Home">' + "Vacay Home" + '</option>' +
                    '<option id="mansion" value="Mansion">' + "Mansion" + '</option>' +
                    '<option id="mancave" value="Man-Cave">' + "Man-Cave" + '</option>' +
                    '<option id="treehouse" value="Treehouse">' + "Treehouse" + '</option>' +
                    '<option id="guesthouse" value="Guesthouse">' + "Guesthouse" + '</option>' +
                '</select>' +
                '<input type="text" class="form-control street" placeholder="New Address">' +
            '</div>' +
             '<div class="form-group">' +
                '<input type="text" class="form-control city" placeholder="City">' +
            '</div>' +
             '<div class="form-group">' +
                '<input type="text" class="form-control state" placeholder="State">' + '</div>' +
             '<div class="form-group">' +
                '<input type="text" class="form-control zipcode" placeholder="Zipcode">' + '</div>' +
             '<div class="form-group">' + '<span class="btn btn-success btn-xs" id="extraAddress">Submit</span>' +
             '</div>' +
         '</div>');
         $("#add-address").hide();
         $("#cancel-address").show();
      });

      $("#cancel-address").click(function() {
          $("#extra-address-form").empty();
          $("#add-address").show();
          $("#cancel-address").hide();
      });

  $("#addContact").submit(function(event) {
    var firstNameForm = $(".firstName").val();
    var lastNameForm = $(".lastName").val();
    var newContact = {
        firstName: firstNameForm,
        lastName: lastNameForm,
        addresses: []
    };

    $(".new-address").each(function() {
        var streetForm = $(this).find("input.street").val();
        var cityForm = $(this).find("input.city").val();
        var stateForm = $(this).find("input.state").val();
        var zipcodeForm = $(this).find("input.zipcode").val();
        var addressTypeForm = $(this).find("select.addressType").val();
        var newAddress = {
              street: streetForm,
              city: cityForm,
              state: stateForm,
              zipcode: zipcodeForm,
              addressType: addressTypeForm
        };
        newContact.addresses.push(newAddress);
    });

    $("ul#contacts").append("<li class='clickable'><span class='contact'>" + newContact.firstName + "</span></li>");

    $(".contact").last().click(function() {
        $(".secondary-ui").show();
        $("#cancel-address").hide();
        // $(".primary-ui").hide();
        $("#show-contact h2").text(newContact.firstName);
        $(".firstName").text(newContact.firstName);
        $(".lastName").text(newContact.lastName);
        $("#addresses").text("");//RESET ADDRESSES LI (so it's only displaying the current one)

      newContact.addresses.forEach(function(address) {
          $("#addresses").append("<li>" + address.addressType + ": " + address.street + ", " + address.city + ", " + address.state + "</li>");
      });
    });

    $("input.firstName").val();
    $("input.lastName").val();
    $("input.street").val();
    $("input.city").val();
    $("input.state").val();
    $("input.zipcode").val();
    $("input.addressType").val();

    event.preventDefault();
  });
});
