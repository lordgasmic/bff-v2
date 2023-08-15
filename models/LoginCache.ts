import { LoginResponseFull } from "./LoginResponseFull.js";

export interface LoginCache {
  timestamp: number;
  loginResponse: LoginResponseFull;
}
