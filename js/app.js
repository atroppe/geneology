window.onload = app;


function app() {

    //jhm parse account codes
    Parse.initialize("7ILyarTpCO2nWbjt1mxeB2iCOdiIdXvdXJkQmiua", "cLf5hm7uCoDQ2JvHY2gNkvPc8t6MSqaVYCVBp5u5");


    window.GeneologyFormView = Parse.View.extend({
        el: document.querySelector("form#newEntry"),
        events: {
            "submit": "handleFormSubmit"
        },
        handleFormSubmit: function(event) {
            event.preventDefault();
            var arrayOfObjects = this.$el.find(":input").serializeArray();
            var object = {};

            arrayOfObjects.forEach(function(val) {
                object[val.name] = val.value;
            })

            var model = new GeneologyFormModel(object);

            model.save().then(function() {
                console.log("data saved");
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
        //     'permission': "",
        //     'email': "",
        //     'first_name': "",
        //     'last_name': "",
        // },
        // validate: function(attrs, options) {
        //     console.log(attrs.email);
        //     if (!attrs.permission) {
        //         return "You must check the box to continue.";
        //     }
        //     if (!attrs.email) {
        //         return "Please enter your email."
        //     }
        //     if (!attrs.first_name) {
        //         return "Please enter your first name.";
        //     }
        //     if (!attrs.last_name) {
        //         return "Please enter your last name."
        //     }
        // }
    });


    var myFormView = new GeneologyFormView();



    var headerHeight = $('header').height();

    function smoothScroll(name) {
        $('html, body').animate({
            scrollTop: $('a[name=' + name + ']').offset().top - headerHeight
        }, 'slow');
    }

    function clickScroll(name) {
            $('body').on('click', 'a[href="#' + name + '"]', function() {
                smoothScroll(name);
            });
        }
        // console.log('a[href="#' + 'background' + '"]');

    $("body").on("click", "#signUp", function() {
        $(".step1l").addClass("hide");
        $('.step1s').removeClass('hide');
        $('html, body').animate({
            scrollTop: $('a[name=signUp]').offset().top - headerHeight
        }, 'slow');
    });
    $("body").on("click", "#login", function() {
        $(".step1s").addClass("hide");
        $('.step1l').removeClass('hide');
        $('html, body').animate({
            scrollTop: $('a[name=login]').offset().top - headerHeight
        }, 'slow');
    });
    $("body").on("click", ".section", function() {
        $('.active').removeClass('active');
        $(this).addClass("active");
    });
    $('body').on('click', 'a[href="#relatives"]', function() {
        smoothScroll('relatives');
    });
    clickScroll('background');
    clickScroll('father');
    clickScroll('f-gf');
    clickScroll('f-gm');
    clickScroll('mother');
    clickScroll('m-gf');
    clickScroll('m-gm');


}
