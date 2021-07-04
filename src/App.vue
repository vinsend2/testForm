<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/form">New client</router-link>
      <router-link to="/simon-say">Simon Says</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  background-image: url("./assets/image/background2.jpg");
  background-repeat: no-repeat;
  background-position: 50%;
  background-clip: border-box;
  background-size: cover;
  background-attachment: fixed;
  padding-bottom: 20px;
  }
#app {  
  font-family: Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align:  center;

  a {
    font-weight: bold;
    color: #2c3e50;
    
    &:not(:last-child) {
      padding-right: 15px;
    }

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
