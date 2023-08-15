import { LoginCache } from "../models/LoginCache.js";
import { LoginResponse } from "../models/LoginResponse.js";
import { LoginResponseFull } from "../models/LoginResponseFull.js";

export class SessionManager {
  private static _instance: SessionManager;

  private SESSION_MAP = new Map<string, LoginCache>();

  private constructor() {}

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  public handleLogin(loginResponse: LoginResponseFull): LoginResponse {
    this.SESSION_MAP.set(loginResponse.authToken, {
      timestamp: Date.now(),
      loginResponse,
    });
    return loginResponse;
  }

  public getSessionInfo(tokenHeader: string): LoginResponse {
    return this.SESSION_MAP.get(tokenHeader).loginResponse;
  }
}

const myClassInstance = SessionManager.Instance;
