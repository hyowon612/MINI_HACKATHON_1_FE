import axios from "axios";
import apiUrl from "./api";

class Api {
  constructor() {
    this.base = axios.create();
    this.listUrl = apiUrl.list;
    this.detailUrl = apiUrl.detail;
    this.commentsUrl = apiUrl.comments;
  }

  async getList() {
    const url = this.listUrl;

    const response = await this.base.get(url);
    const result = await response.data;
    
    return result;
  }

  async getDetail() {
    const url = this.detailUrl;

    const response = await this.base.get(url);
    const result = await response.data;
    
    return result;
  }

  async getComments() {
    const url = this.commentsUrl;

    const response = await this.base.get(url);
    const result = await response.data;
    
    return result;
  }
}

export default Api;