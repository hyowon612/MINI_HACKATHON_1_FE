export const API_HOST = "http://127.0.0.1:8000";

const apiUrl = {
  auth: {
    login: API_HOST + `/accounts/login`,
    signup: API_HOST + `/accounts/signup`,
  },
  
  list: API_HOST + `/movie/home/?page=`,
  detail: API_HOST + `/movie/`,
  comments: {
    get: API_HOST + `/movie/get/`,
    create: API_HOST + `/movie/create/`,
  }
};

export default apiUrl;
