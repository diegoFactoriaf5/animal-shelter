import axios from 'axios';

const API_URL = "http://localhost:9060/api/auth/";

class AuthService {
  async login(username, password) {
    const response = await axios
      .post(API_URL + "login", {
        username,
        password
      });
      console.log(response)
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password, role) {
    return axios.post(API_URL + "register", {
      username,
      email,
      password,
      role
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();