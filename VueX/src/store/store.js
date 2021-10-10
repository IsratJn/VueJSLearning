import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state: {
        products: [
            {name: 'Banana', price: 20},
            {name: 'KitKat', price: 40},
            {name: 'Perfume', price: 60},
            {name: 'Red Wine', price: 80}
        ]
    },
    getters: {
        saleProducts: (state) => {
            var saleProducts = state.products.map( product => {
                return {
                    name:  '**' + product.name + '**',
                    price: product.price / 2,
                };
            });
            return saleProducts;
        }
    },
    mutations: {
        reducePrice: state => {
            state.products.forEach( product => {
                product.price -= 1
            });
        }
    }
});