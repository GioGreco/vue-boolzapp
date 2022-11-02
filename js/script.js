"use strict";

const { createApp } = Vue;

// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

const app = createApp({
    data(){
        return{
            ready: 'Ready'
        }
    },
    methods: {

    },
    computed: {

    },
    mounted(){
        console.log(this.ready)
    }
});

app.mount('#app')