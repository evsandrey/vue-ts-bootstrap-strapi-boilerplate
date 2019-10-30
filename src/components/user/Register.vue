<template>
  <div class="text-center holder">
    <form class="form-signin">
      <img
        class="mb-4"
        src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
        alt=""
        width="72"
        height="72"
      />
      <h1 class="h3 mb-3 font-weight-normal">Please register</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        v-model="email"
        required
        autofocus
      />
      <label for="inputUsername" class="sr-only">Email address</label>
      <input
        type="text"
        id="inputUsername"
        class="form-control"
        placeholder="Username"
        v-model="username"
        required
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        v-model.lazy="password"
        required
      />
      <button
        class="btn btn-lg btn-primary btn-block"
        @click.prevent="register"
      >
        Register
      </button>
      <p class="mt-5 mb-3 text-muted">&copy; 2019->></p>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import user from "../../store/modules/users";

@Component({})
export default class MyComponent extends Vue {
  email: string = "";
  username: string = "";
  password: string = "";

  register() {
    user.register({
      email: this.email,
      username: this.username,
      password: this.password
    });
  }
}
</script>

<style scoped>
.holder {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
