var app = new Vue({
    el: '#vue-js',
    data: {
        product: "Socks",
        description: "A pair of warm, fuzzy socks!",
        test: function () {
            return "I am just testing if it works inside data object";
        }
    },
    methods: {
        greet: function () {

            //return "Good Morning!";
            return this.product;

        }
    }



});

var demo = new Vue({
    el: '#name',
    data: {
        name: "Israt",
        website: "https://tabaqcoffee.com/",
        favoriteDrink: "Coffee",

    },
    methods: {
        bade: function () {

            let about = this.name + " loves " + this.favoriteDrink;
            return about;
            //return "Good Bye!";


        }
    }
    /*method: {
        info: function () {
            let about = this.name + "loves" + this.favoriteDrink;
            return about;
        }
    }*/
})


//here i created a instance of vue

