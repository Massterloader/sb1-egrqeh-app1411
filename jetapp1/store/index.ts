import Vue from 'nativescript-vue';
import Vuex from 'vuex';
import cart from './modules/cart';
import auth from './modules/auth';
import products from './modules/products';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    auth,
    products
  },
  strict: process.env.NODE_ENV !== 'production'
});