<template>
  <div>
    <Navbar />
    <div class="body-bg-color">
      <br />
      <br />
      <div class="card ml-5 mr-5 rounded-0">
        <h4 class="card-title mx-auto pt-5 font-weight-light pb-5">Cases By Country</h4>
      </div>

      <br />
      <br />

      <div class="card ml-5 mr-5">
          <v-card>
    <v-card-title>
      Search Country
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="get_countries"
      :items-per-page="10"
      :search="search"
    ></v-data-table>
  </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import { mapGetters } from "vuex";
export default {
  name: "CountryCases",
  components: {
    Navbar
  },
  computed:{
    ...mapGetters(["get_countries"])
  },
  data() {
    return {
     search: '',        
        
      headers: [
          {
            text: 'Country',
            align: 'start',
            sortable: true,
            value: 'Country',
          },
          { text: 'All Cases', value: 'TotalConfirmed' },
          { text: 'New Cases', value: 'NewConfirmed' },
          { text: 'Recoveries', value: 'TotalRecovered' },
          { text: 'Deaths', value: 'TotalDeaths' },
      ],
      countryCases: this.get_countries,
    };
  },
};
</script>

<style>
</style>