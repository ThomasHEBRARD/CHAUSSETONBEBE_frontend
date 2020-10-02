import axios from "axios";

import ApiClient, { getHeaders } from "./api_client";

class ShoppingList extends ApiClient {
  public constructor() {
    super();
    this.paths = {
      getProducts: "/products/",
    };
  }
  public getProducts = async (): Promise<any> => {
    const response = await axios.get(this.url("getProducts"), {
      headers: getHeaders(),
    });

    return response.data;
  };
}

const shopClient = new ShoppingList();

export default shopClient;
