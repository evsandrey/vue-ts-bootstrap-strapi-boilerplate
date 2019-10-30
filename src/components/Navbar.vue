<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarsExampleDefault"
      aria-controls="navbarsExampleDefault"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/" tag="a" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="http://example.com"
            id="dropdown01"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            >Dropdown</a
          >
          <div class="dropdown-menu" aria-labelledby="dropdown01">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
      </ul>
      <form>
        <router-link v-if="!isLoggedIn" to="login" tag="button" class="btn btn-outline-success my-2 my-sm-0">Login</router-link>
        <router-link v-if="!isLoggedIn" to="register" tag="button" class="btn btn-outline-success my-2 my-sm-0">Register</router-link>
        <button v-if="isLoggedIn" class="btn btn-outline-success my-2 my-sm-0" >{{username}}</button>
        <button v-if="isLoggedIn" class="btn btn-outline-success my-2 my-sm-0" @click.prevent="logOut">Logout</button>
      </form>
    </div>
  </nav>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import users from "../store/modules/users";
import router from '../router';

@Component
export default class Navbar extends Vue {
  
  get isLoggedIn() {
    return users.isTokenized
  }

  get username() {
    return users.username
  }

  logOut(){
    users.logout();
    router.push("login")
  }
}
</script>
