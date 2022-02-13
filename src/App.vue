<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a class="navbar-brand"> Appointment </a>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link :to="{ name: 'home' }" class="nav-link">Home <span class="sr-only"></span></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'appointments' }" class="nav-link">Apponintments <span class="sr-only"></span></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'vueappointment' }" class="nav-link">VueApponintments <span class="sr-only"></span></router-link>
                    </li>
                </ul>
                <p id="navpstyle">
                    © 2022-02 Made by Spider, All rights reserved
                </p>
            </div>
        </nav>
        <router-view />
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
  }
  #navpstyle {
      font-size: 15px;
      margin-top: 30px;
      color: #f3f3;
  }
</style>
