<template>
  <div>
    <Navbar />
    <Error />
    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="true"
      background-color="black"
      loader="dots"
    ></loading>
    <div class="body-bg-color">
      <br />
      <br />
      <div class="card ml-5 mr-5 rounded-0">
        <h4 class="card-title mx-auto pt-5 font-weight-light">Welcome To Covid Updates</h4>
        <div class="card-body pt-2 mx-auto pb-5 font-weight-light font-size-18">
          A real time application that gives you the latest
          stats about the Covid-19 pandemic.
        </div>
      </div>

      <br />
      <br />

      <div class="row ml-5 mr-5">
        <div class="col-sm-6 col-lg-3 mb-4 d-flex justify-content-center justify-content-lg-start">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Total Cases</h5>
              <h6 class="card-subtitle mb-2 text-muted">{{summary.totalCases}}</h6>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3 mb-4 d-flex justify-content-center justify-content-lg-center">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">New Cases</h5>
              <h6 class="card-subtitle mb-2 text-muted">{{summary.newCases}}</h6>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3 mb-4 d-flex justify-content-center justify-content-lg-center">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Recoveries</h5>
              <h6 class="card-subtitle mb-2 text-muted">{{summary.recoveries}}</h6>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3 pb-4 d-flex justify-content-center justify-content-lg-end">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Deaths</h5>
              <h6 class="card-subtitle mb-2 text-muted">{{summary.deaths}}</h6>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div class="body-bg-color">
        <div class="card ml-5 mr-5">
          <div class="card-header font-weight-bold">
            <span class="text-uppercase">Top 5 Affected Countries ({{title}})</span>
            <div class="dropdown" style="display:inline; float:right">
              <a
                style
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span style="visibility:hidden">Hello</span>
                <span class="elipsis" style="visibility:hidden">World jty</span>
                <i class="fas fa-lg fa-ellipsis-h"></i>
              </a>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item unstyled_link" @click="TotalCases()">Total Cases</a>
                <a class="dropdown-item unstyled_link" @click="NewCases()">New Cases</a>
                <a class="dropdown-item unstyled_link" @click="Recoveries()">Recoveries</a>
                <a class="dropdown-item unstyled_link" @click="Deaths()">Deaths</a>
              </div>
            </div>
          </div>
          <button id="displayError" style="display:none" data-toggle="modal" data-target="#error"></button>
          <div class="card-body">
            <line-chart :data="chartData"></line-chart>
          </div>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";
//import Axios from "axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import Error from "./Notifications/Error";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Index",
  components: {
    Navbar,
    Loading,
    Error
  },
  data() {
    return {
      isLoading: false,
      title: "Number of Cases",
      cases: [],
      chartData: {},
      summary: {
        totalCases: "loading...",
        newCases: "loading...",
        recoveries: "loading...",
        deaths: "loading..."
      },
      polling: null
    };
  },
  created() {
    setInterval(() => {
      this.$store.dispatch("GetSummary");
    }, 600000);
  },
  mounted() {
    this.Summary();
  },
  computed: {
    ...mapGetters(["get_summary", "get_countries", "state"])
  },
  methods: {
    ...mapActions(["GetSummary"]),
    async Summary() {
      if (this.state != "created") {
        this.isLoading = true;
        try {
          await this.GetSummary();
          //Display data the first time the app loads
          this.DisplayData();

          //Poll new data for as long as the user does not navigate to another route
          this.polling = setInterval(() => {
            this.DisplayData();
          }, 600000);
          this.isLoading = false;
        } catch (e) {
          document.getElementById("displayError").click();
          this.isLoading = false;
        }
      } else {
        //Display the data in the store when the user hits the page
        this.DisplayData();

        //Stop the 1st polling request created on page load to prevent duplicate polling
        clearInterval(this.polling);

        //Poll new data after the user has navigated away and back to the page
        setInterval(() => {
          this.DisplayData();
        }, 600000);
        this.isLoading = false;
      }
    },
    DisplayData() {
      this.summary = {};

      var numberFormat = Intl.NumberFormat();
      this.summary["totalCases"] = numberFormat.format(
        this.get_summary.TotalConfirmed
      );
      this.summary["newCases"] = numberFormat.format(
        this.get_summary.NewConfirmed
      );
      this.summary["recoveries"] = numberFormat.format(
        this.get_summary.TotalRecovered
      );
      this.summary["deaths"] = numberFormat.format(
        this.get_summary.TotalDeaths
      );

      setInterval(() => {
        //var numberFormat = Intl.NumberFormat();
        this.summary["totalCases"] = "Hello";
      }, 3000);

      //Sort the Countries object and extract the first 5 total cases, new cases, recoveries, and deaths
      this.cases = this.get_countries.slice(0);
      this.TotalCases();
    },
    TotalCases() {
      this.cases
        .sort(function(a, b) {
          return b.TotalConfirmed - a.TotalConfirmed;
        })
        .slice(0, 5);
      var tempObj = {};
      for (var i = 0; i < 5; i++) {
        tempObj[this.cases[i].Country] = this.cases[i].TotalConfirmed;
      }
      this.title = "Number of Cases";
      this.chartData = tempObj;
    },
    NewCases() {
      this.cases
        .sort(function(a, b) {
          return b.NewConfirmed - a.NewConfirmed;
        })
        .slice(0, 5);
      var tempObj = {};
      for (var i = 0; i < 5; i++) {
        tempObj[this.cases[i].Country] = this.cases[i].NewConfirmed;
      }
      this.title = "New Cases";
      this.chartData = tempObj;
    },
    Recoveries() {
      this.cases
        .sort(function(a, b) {
          return b.TotalRecovered - a.TotalRecovered;
        })
        .slice(0, 5);

      var tempObj = {};
      for (var i = 0; i < 5; i++) {
        tempObj[this.cases[i].Country] = this.cases[i].TotalRecovered;
      }
      this.title = "Recoveries";
      this.chartData = tempObj;
    },
    Deaths() {
      this.cases
        .sort(function(a, b) {
          return b.TotalDeaths - a.TotalDeaths;
        })
        .slice(0, 5);

      var tempObj = {};
      for (var i = 0; i < 5; i++) {
        tempObj[this.cases[i].Country] = this.cases[i].TotalDeaths;
      }
      this.title = "Deaths";
      this.chartData = tempObj;
    }
  }
};
</script>

<style>
.body-bg-color {
  background-color: #f8f9fc !important;
  min-height: 100px;
}

.font-size-18 {
  font-size: 18px;
}

.unstyled_link:hover {
  cursor: pointer;
}
</style>

<style scoped>
a:hover {
  color: gray;
  text-decoration: none;
}

a {
  color: gray;
  text-decoration: none;
  background-color: transparent;
}

@media (max-width: 575.98px) {
  .card-header {
    font-size: 13px;
  }
  .elipsis {
    display: none;
  }
}
</style>