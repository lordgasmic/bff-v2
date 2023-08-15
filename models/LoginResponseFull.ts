import { LoginResponse } from "./LoginResponse.js";

export interface LoginResponseFull extends LoginResponse {
  credentialsValid: boolean;
  enabled: boolean;
}
