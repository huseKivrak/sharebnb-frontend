import axios from "axios";

const HOSTNAME = process.env.HOSTNAME || "http://localhost:3001";

class ShareBnBApi {
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${HOSTNAME}/${endpoint}`;
    const params = method === "get" ? data : {};
    const headers = { Authorization: `Bearer ${this.token}` };
    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      // let message = err.response.data.error.message;
      // throw Array.isArray(message) ? message : [message];
    }
  }

  static async authenticate(data) {
    let res = await this.request(`auth/register`, data, 'post');
    return res.token;
  }

  static async login(username, password) {
    let res = await this.request(`auth/login`, {username, password}, 'post');
    return res.token;
  }

  static async getCurrentUser(id) {
    let res = await this.request(`users/${id}`);
    return res.user;
  }

  static async getListings() {
    let res = await this.request(`listings`);
    return res.listings;
  }

  static async getListing(id) {
    let res = await this.request(`listings/${id}`);
    return res.listing;
  }

  static async getListingsByQuery(query, term) {
    let res = await this.request(`listings?${query}=${term}`);
    return res.listings;
  }

  static async createListing(data) {
    let res = await this.request(`listings`, data, "post");
    return res.listing;
  }

  static async updateListing(id, data) {
    let res = await this.request(`listings/${id}`, data, "patch");
    return res.listing;
  }

  static async deleteListing(id) {
    let res = await this.request(`listings/${id}`, {}, "delete");
    return res.message;
  }

  static async getConversations() {}
  static async getConversation(id) {}

  static async getMessages() {}
  static async getMessage(id) {}

  static async getFilteredMessages(filter) {}

  static async getBookings() {}
  static async getBooking(id) {}
}
export default ShareBnBApi;
