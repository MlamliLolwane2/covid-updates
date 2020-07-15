<template>
  <div>
    <About />
    <Contact/>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark-blue">
      <router-link to="/" class="navbar-brand">Covid Updates</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link font-weight-light">
              <u>Home</u>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cases-by-country" class="nav-link font-weight-light">
              <u>Cases by Country</u>
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link font-weight-light pointer" data-toggle="modal" data-target="#about">
              <u>About</u>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link font-weight-light dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <u>External Resources</u>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="nav-link font-weight-light link_black" style="color:black" href="https://www.who.int/health-topics/coronavirus#tab=tab_1"
               target="_blank">
                <u>What is Covid-19</u>
              </a>
              <a class="nav-link font-weight-light link_black" style="color:black" href="https://www.who.int/health-topics/coronavirus#tab=tab_2" 
              target="_blank">
                <u>How to prevent Spread</u>
              </a>

              <a class="nav-link font-weight-light link_black" style="color:black" href="https://www.who.int/health-topics/coronavirus#tab=tab_3"
               target="_blank">
                <u>Symptoms</u>
              </a>
            </div>
          </li>
        </ul>
        <button class="btn btn-success my-2 my-sm-0" data-toggle="modal" data-target="#contact">Get in Touch</button>
      </div>
    </nav>
  </div>
</template>

<script>
import About from "./Notifications/About";
import Contact from "./Notifications/Contact";
export default {
  name: "Navbar",
  components: {
    About,
    Contact
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-light .navbar-brand {
  color: snow !important;
  font-weight: bold;
}

.bg-dark-blue {
    background-color: #36C !important;
}

.bg-light {
  background-color: teal !important;
}

.navbar-dark .navbar-nav .nav-link {
    color: snow;
}

.link_black:hover{
 color: black !important
}

.navbar-light .navbar-nav .nav-link:focus,
.navbar-light .navbar-nav .nav-link:hover {
  color: white;
}


.btn-success:hover {
  color: #fff;
  background-color: #b0b0b0;
  border-color: snow;
}

.btn-success {
  color: #fff;
  background-color: transparent;
  border-color: snow;
}

.pointer:hover{
cursor:pointer
}
</style>
