import Axios from "axios";

const state = {
    summary: '',
    countries: '',
    state: '',
};

const mutations = {
    add_summary(state, summaryObj) {
        state.summary = summaryObj;
    },
    add_countries(state, countriesArr){
        state.countries = countriesArr;
    },
    set_app_state(state){
        state.state = "created"
    },
    reset_state(state){
        state.summary = '',
        state.countries = '',
        state.state = ''
    }
};

const actions = {
    async GetSummary({commit}){
        await Axios({
            method: "get",
            url: "https://api.covid19api.com/summary",
            timeout: 30000
          }).then(function(response) {
            const respSummary = response.data.Global;
            const respCountries = response.data.Countries;
            commit('add_summary', respSummary);
            commit('add_countries', respCountries);
            commit('set_app_state');
          });
    }
};

const getters = {
    get_summary: (state) => state.summary,
    get_countries: (state) => state.countries,
    state: (state) => state.state
}

export default{
    state,
    mutations,
    actions,
    getters
}