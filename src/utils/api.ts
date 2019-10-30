import axios from "axios";
import {
  UserRegisterRq,
  UserLoginRq,
  UserProfile,
  UserRs
} from "@/store/modules/user.d.ts";

const apiUrl =
  process.env.API_URL ||
  "http://1a818e70-832b-4c7e-b149-bf3cc68fba1a.pub.cloud.scaleway.com:1337";

export const API = axios.create({
  baseURL: apiUrl
});

export function setJWT(jwt: string) {
  API.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function clearJWT() {
  delete API.defaults.headers.common["Authorization"];
}

export async function registerUser(
  user: UserRegisterRq
): Promise<UserRs | null> {
  try {
    const resp = await API.post("/auth/local/register", user);
    return resp.data as UserRs;
  } catch (error) {
    return null;
  }
}

export async function loginUser(
  user: UserLoginRq
): Promise<UserRs | null> {
  try {
    const resp = await API.post("/auth/local", user);
    return resp.data as UserRs;
  } catch (error) {
    return null;
  }
}

export async function updateUser(): Promise<UserProfile | null> {
  try {
    const resp = await API.get("/users/me");
    return resp.data as UserProfile;
  } catch (error) {
    return null;
  }
}
