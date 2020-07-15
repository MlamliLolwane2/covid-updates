import Vue from 'vue';
import Router from 'vue-router';


import Index from '@/components/Index';
import CountryCases from '@/components/CountryCases';


Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Index,
        },

        {
            //Dashboard
            path: '/cases-by-country',
            component: CountryCases,
            meta: {
                title: 'Covid Updates - Cases By Country'
            }
        },
    ]
});

export default router;