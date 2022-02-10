<template>
    <div id="app">
      <img src="@/assets/logo.png">
      <h5>Welcome to my web site of Appointment</h5>
    </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>


<style>
  #app {
    padding-top: 50px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #nav {
    font-size: 20px;
    color: pink;
  }
  #date {
    width: 30%;
  }
</style>
