window.onload = app;


function app() {

    // Parse.initialize("YDmkliixtm3UwCGsRprwcZU2sQPrSjYjDqsEaxRI", "wukv1OaeNM2gcW1hvmHZpgkW6TUQk8n5vHKU62Tt");
    Parse.initialize("7ILyarTpCO2nWbjt1mxeB2iCOdiIdXvdXJkQmiua", "cLf5hm7uCoDQ2JvHY2gNkvPc8t6MSqaVYCVBp5u5");
    // var TestObject = Parse.Object.extend("TestObject");
    // var testObject = new TestObject();
    // testObject.save({
    //     foo: "bar"
    // }).then(function(object) {
    //     alert("yay! it worked");
    // });


    window.GeneologyFormView = Parse.View.extend({
        el: document.querySelector("form"),
        events: {
            "submit": "handleFormSubmit"
        },
        handleFormSubmit: function(event) {
            event.preventDefault(); // don't refresh page (server-side app)

            // get the info in the form
            var arrayOfObjects = this.$el.find(":input").serializeArray();
            var object = {};

            arrayOfObjects.forEach(function(val) {
                object[val.name] = val.value;
            })

            var model = new GeneologyFormModel(object);
            model.save().then(function() {
                console.log("request succeeded");
            });

            this.remove();
        }
    });

    window.GeneologyFormModel = Parse.Object.extend('FormSubmission', {
        defaults: {
            first_name: "JHMOMC",
            last_name: "JHMOMC",

        }
    });

    var myFormView = new GeneologyFormView();
    // console.log(myFormView)




}
