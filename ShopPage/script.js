Vue.component('commodity',{
    props:{
        premium:{
            type:Boolean,
            required: true
        }
    },
    template:`
        <div class="product">
        <h1 class="h1">{{title}}</h1>
        <h2 class="h2">{{description}}</h2>
        <p>User is premium:{{premium}}</p>
        <img class="image" v-bind:src="image" v-bind:alt="altText" />

        <div>
            <a class="link" :href="link">Click Here! For the best coffee in town</a>
        </div>



        <p v-if="orderNo>10">The Coffee is Available</p>
        <p v-else-if="orderNo>0 && orderNo<10">May be available</p>
        <p v-else>Not Available</p>



        <h4 v-if="onSale">The Mocha is on 15% sale</h4>
        <h4 v-else>Sorry, No discount available</h4>



        <h4 class="h4">The coffee contains:</h4>
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <button class="button">Add to Cart</button>
        <button class="cart">Cart{{cart}}</button>
        </div>
    `,
    data() {
        return{
            product: "Coffee",
            brand: "Americano",
            description: "Happiness in a cup!",
            image: "./Assets/pexels-chevanon-photography-312418.jpg",
            link: "https://tabaqcoffee.com/",
            orderNo: 15,
            onSale: true,
            details: ["Milk", "Cocoa Bean", "Chocolate Syrup"],
            cart: 0
        }
    },
        computed:{
            title(){
               return this.product+ ' '+ this.brand;
            }
        }
    //computed is a object of computed properties
    
})



var app = new Vue({
    el: '#header',
    data:{
        premium:true
    }
   
})