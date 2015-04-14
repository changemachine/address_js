$(document).ready(function() {
    $('form#new-contact').submit(function(event) {
        event.preventDefault();

        var inputtedFirstName = $("input#new-first-name").val();
        var inputtedLastName =  $("input#new-last-name").val();
        var inputtedStreet = $("input#new-street").val();
        var inputtedCity = $("input#new-city").val();
        var inputtedState = $("input#new-state").val();
        var inputtedZip = $("input#new-zip").val();

        var newAddress =    {   street: inputtedStreet,
                                city: inputtedCity,
                                state: inputtedState,
                                zip: inputtedZip,
                                fullAddress: function() {
                                    return this.street + ", " + this.city + ", " + this.state + ", " + this.zip;
                                }
                            };

        var newContact = {
                            firstName: inputtedFirstName,
                            lastName: inputtedLastName,
                            address: newAddress.fullAddress()
                         };

        $("ul#contacts").append("<li><span class='contact'>" +
                        newContact.firstName +
                        " " + newContact.lastName +
                        "</span></li>");

        $("input#new-first-name").val();
        $("input#new-last-name").val();
        $("input#new-street").val();
        $("input#new-city").val();
        $("input#new-state").val();
        $("input#new-zip").val();




        $(".contact").last().click(function() {
            $("#show-contact").show();
            $("show-contact h2").text(newContact.firstName + " " + newContact.lastName);
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);
            $(".address").text(newContact.address);
        });

    });


});
