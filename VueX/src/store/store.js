import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);//for using usex plugins


export const store = new Vuex.Store({
    state: {//the data in our app is called state
        products: [
            {name: 'Banana Skin', price: 20},
            {name: 'Shiny Star', price: 40},
            {name: 'Green Shells', price: 60},
            {name: 'Red Shells', price: 80}
        ]
    }
});