import axios from "axios";

const HOSTNAME = process.env.HOSTNAME || "http://localhost:3001";

class ShareBnBApi {
  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${HOSTNAME}/${endpoint}`;
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCurrentUser(id){
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

  static async getBookings() {}
  static async getBooking(id) {}
}
export default ShareBnBApi;
