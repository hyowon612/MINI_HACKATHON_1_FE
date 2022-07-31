export const API_HOST = "http://127.0.0.1:8000";

const apiUrl = {
  list: API_HOST + `/movie/home/`,
  detail: API_HOST + `/movie/1/`,
  comments: API_HOST + `/movie/comments/`
};

// export const API_HOST = "https://4026148c-8461-4a65-bbb5-bafce3e2e199.mock.pstmn.io";

// const apiUrl = {
//   list: API_HOST + `/movie/movielist/`,
//   detail: API_HOST + `/movie/1/`,
//   comments: API_HOST + `/movie/comments/`
//};

export default apiUrl;