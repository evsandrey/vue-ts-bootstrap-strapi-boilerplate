<template>
  <div>
    <Navbar></Navbar>
    <div id="main">
      <main role="main" class="container">
        <div class="starter-template">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import Navbar from "./components/Navbar.vue";

@Component({
  components: {
    HelloWorld,
    Navbar
  }
})
export default class App extends Vue {}
</script>

<style>
#main {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
}
</style>
