import axios from "axios";
import apiUrl from "./api";

class Api {
  constructor() {
    this.base = axios.create();
    this.allUrl = apiUrl.all;
    this.listUrl = apiUrl.list;
    this.detailUrl = apiUrl.detail;
    this.getCommentUrl = apiUrl.comments.get;
    this.createCommentUrl = apiUrl.comments.create;
  }
  async getAll() {
    const url = this.allUrl;

    const response = await this.base.get(url);
    const result = await response.data;
    
    return result;
  }

  async getList(page) {
    const url = this.listUrl + page;

    const response = await this.base.get(url);
    const result = await response.data;
    
    return result;
  }

  async getDetail(id) {
    const url = this.detailUrl + id + '/';

    const response = await this.base.get(url);
    const result = await response.data;
    
    return result;
  }

  async getComments(id) {
    const url = this.getCommentUrl + id + '/';

    console.log(url);
    const response = await this.base.get(url);
    const result = await response.data;
    
    return result;
  }

  async createComment(comment, username, id) {
    const url = this.createCommentUrl + id + '/';

    const body = {
      body: comment,
      username: username
    };
    const response = await axios.post(url, body);
    const result = response;

    return {
      result,
    };
  }
}

export default Api;