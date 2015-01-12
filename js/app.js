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

            model.fetch().then(function(mod) {
                console.log(mod.toJSON());
            });

            this.remove();
            $('.success-msg').html("Your data has been submitted.  Thank you for participating!");
        }
    });

    window.GeneologyFormModel = Parse.Object.extend('FormSubmission', {
        // defaults: {
        //     permission: "off",
        //     first_name: "jhmomc",
        //     last_name: "JHMOMC",
        //     arrived_america: 2014,
        //     arrived_mc: 2014,
        //     b_mitzvah: "NA",
        //     bagel: "NA",
        //     bakery: "NA"

        // },
        // validate: function(attrs, options) {
        //     if (attrs.permission !== "on") {
        //         return "you must check the box to continue";
        //     }
        // }
    });


    var myFormView = new GeneologyFormView();
    // console.log(myFormView)

    // //WAT section

    // var Data = Parse.Object.extend('data', {});
    // //^ should be same as model
    // // var myModel = new GeneologyFormModel(object);
    // // myModel.fetch().then(function(mod) {
    // //     console.log(mod.toJSON());
    // // });


    // var List = Parse.Collection.extend({
    //     // model: myModel
    //     model: Data
    // });
    // var myList = new List();
    // console.log(myList.toJSON());
    // // console.log(Data);
    // myList.fetch().then(function(item) {
    //     console.log(item.toJSON());
    // })
    // var lastName = "Troppe";
    // myList.fetch().then(function() {
    //     var matching = myList.filter(function(r) {
    //         // return r.attributes.last_name === lastName;
    //         return r.attributes.last_name;
    //     });
    //     console.log(matching);
    // });




}
