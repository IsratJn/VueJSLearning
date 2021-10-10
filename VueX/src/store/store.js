import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);//for using usex plugins


export const store = new Vuex.Store({
    state: {//the data in our app is called state
        products: [
            {name: 'Banana', price: 20},
            {name: 'KitKat', price: 40},
            {name: 'Perfume', price: 60},
            {name: 'Red Wine', price: 80}
        ]
    }
});