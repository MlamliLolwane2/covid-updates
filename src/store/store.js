import Vue from 'vue';
import Vuex from 'vuex';

import Summary from './modules/summary';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        summary: Summary,
    }
});