//main

import Vue from 'vue'
import App from './App.vue' //app.vueの読み込み
import store from './store' //store.jsの読み込み

new Vue({
    el: '#app',

    store,
    //これは何をしているのか？？
    render: h=>h(App)
})