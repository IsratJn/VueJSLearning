var app = new Vue({
    el: '#vue-app',
    data: {
        age: 23
    },
    methods: {
        add: function (inc) {
            this.age += inc;
        },
        subtract: function (dec) {
            this.age -= dec;
        }
    }
})