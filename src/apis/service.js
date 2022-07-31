import axios from "axios";
import apiUrl from "./api";

class Api {
  constructor() {
    this.base = axios.create();
    this.listUrl = apiUrl.list;
    this.detailUrl = apiUrl.detail;
    this.commentsUrl = apiUrl.comments;
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
    const url = this.commentsUrl + id;

    const response = await this.base.get(url);
    const result = await response.data;
    
    return result;
  }
}

export default Api;