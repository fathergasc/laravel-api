window.Vue = require("vue");

//alternative method to import Vue
//import Vue from 'vue'

import App from "./views/App";

const app = new Vue({
    el: "#root",
    render: (h) => h(App),
});
