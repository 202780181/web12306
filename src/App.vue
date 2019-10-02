<template>
  <div id="app">
    <!-- <router-view /> -->
    <mytitle></mytitle>
  </div>
</template>
<script>
import Mytitle from "./views/renderer/mytitle/Mytitle";
export default {
  data() {
    return {};
  },
  components: {
    Mytitle
  }
};
</script>

<style>
@import url("./common/styles/reast.css");
html,
body {
  width: 100%;
  height: 100%;
  background: #42b983;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
