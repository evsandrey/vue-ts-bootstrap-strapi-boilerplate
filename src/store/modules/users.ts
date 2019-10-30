import {
  VuexModule,
  Module,
  getModule,
  MutationAction,
  Mutation,
  Action
} from "vuex-module-decorators";
import store from "..";
import { loginUser, registerUser, updateUser, setJWT, clearJWT } from "@/utils/api";
import { UserProfile, UserLoginRq, UserRegisterRq, UserRs } from "./user";

@Module({
  namespaced: true,
  name: "users",
  store,
  dynamic: true
})
export class UserModule extends VuexModule {
  profile: UserProfile | null = null;
  token: string | null = localStorage.getItem("token") || null;

  get isTokenized() {
    return this.token;
  }

  get username() {
    return (this.profile && this.profile.username) || undefined;
  }

  get getToken() {
    return this.token;
  }

  @Mutation
  setProfile(userProfile: UserProfile) {
    this.profile = userProfile;
  }

  @Mutation
  setAuth(userRs: UserRs) {
    console.log("setAuth",userRs)
    this.profile = userRs.user;
    this.token = userRs.jwt;
    setJWT(userRs.jwt);
    localStorage.setItem("token", userRs.jwt);
  }

  @Mutation
  dropAuth(tmp?: boolean) {
    console.info("mutation");
    this.profile = null;
    this.token = null;
  }

  @Action({ commit: "setAuth" })
  async register(registerRq: UserRegisterRq) {
    const userRs: UserRs | null = await registerUser(registerRq);
    return userRs;
  }

  @Action({ commit: "setAuth" })
  async login(loginRq: UserLoginRq) {
    const userRs: UserRs | null = await loginUser(loginRq);
    return userRs;
  }

  @Action({ commit: "dropAuth" })
  logout() {
    console.info("cleaning storage");
    localStorage.removeItem('token')
    localStorage.clear();
    console.info("cleaning store");
    console.info("cleaning api");
    clearJWT();
  }

  @Action({ commit: "setProfile" })
  async updateProfile() {
    const UserProfileRs: UserProfile | null = await updateUser();
    return UserProfileRs;
  }

  @Action({ commit: "setProfile" })
  async checkAuth(token: string) {
    setJWT(token)
    this.updateProfile();
  }
}

export default getModule(UserModule);
