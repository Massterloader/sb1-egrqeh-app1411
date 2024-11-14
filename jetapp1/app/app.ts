import { Application } from '@nativescript/core';

Application.run({ moduleName: 'app-root' });

import Vue from 'nativescript-vue';
import App from '.app/components/App.vue';
import store from '.src/redux/store';
import { localize } from '@nativescript/localize';
import { firebase } from '@nativescript/firebase';

// Initialize Firebase
firebase.init({
  persist: true
}).then(() => {
  console.log('Firebase initialized');
});

// Set up localization
Vue.filter('L', localize);

// Set up Vue
new Vue({
  store,
  render: h => h(App)
}).$start();