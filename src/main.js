import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyCXUPwo2ZJtXO7ISEML6CrBiv7phFwKv_A",
    authDomain: "datap-c22a6.firebaseapp.com",
    databaseURL: "https://datap-c22a6-default-rtdb.firebaseio.com",
    projectId: "datap-c22a6",
    storageBucket: "datap-c22a6.appspot.com",
    messagingSenderId: "283503899388",
    appId: "1:283503899388:web:3d76d4de356286dd7d1d79",
    measurementId: "G-2VEQKGTKBM"
  };
  firebase.initializeApp(firebaseConfig);
}
export const db = firebase.firestore()
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
