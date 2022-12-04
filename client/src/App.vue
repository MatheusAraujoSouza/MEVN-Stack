<template>
  <div id="app">
    <div align="center" class="container">
      <div class="header">
        <button class="btn-logout" v-if="authenticated()" @click="logout">SAIR</button>
      </div>
    </div>
    <router-view/>
  </div>
</template>


<script>
export default {
  methods:{
    logout(){
      localStorage.clear()
      this.$router.push('/')
    },
    authenticated(){
      return !!localStorage.token
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.header{
  text-align: right;
}


</style>
