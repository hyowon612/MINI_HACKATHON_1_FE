import axios from "axios";
import apiUrl from "./api";

class AuthService {
  constructor() {
    this.base = axios.create();
    this.loginUrl = apiUrl.auth.login;
    this.signupUrl = apiUrl.auth.signup;
  }

  async signup(username, password) {
    const url = this.signupUrl;
    const body = {
      username: username,
      password: password
    };
    const response = await this.base.post(url, body);
    const result = response.status;

    return {
      result,
    };
  }

  async login(username, password) {
    const url = this.loginUrl;
    const body = {
      username: username,
      password: password
    };
    const response = await this.base.post(url, body);
    const result = response.status;

    return {
      result,
    };
  }
}

export default AuthService;
