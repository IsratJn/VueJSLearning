var app = new Vue({
    el: '#header',
    data: {
        product: "Coffee",
        description: "Happiness in a cup!",
        image: "./Assets/pexels-chevanon-photography-312418.jpg",
        link: "https://tabaqcoffee.com/",
        orderNo: 15,
        onSale: true,
        details: ["Milk", "Cocoa Bean", "Chocolate Syrup"],
        cart: 0
    }
})