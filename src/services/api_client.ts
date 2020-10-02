import axios from "axios";
import logger from "./logger/logger";

export const JWT_TOKEN = "pricemoov_jwt";

export const getHeaders = (addAuthentication = true) => {
  const h: { [k: string]: string } = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  // TODO: add token heere
  // if (addAuthentication) {
  //     const pricemoovAuth = localStorage.getItem('pricemoov_auth');
  //     if (pricemoovAuth) {
  //         h.Authorization = `jwt ${JSON.parse(pricemoovAuth).token}`;
  //     }
  // }
  return h;
};

export class CanceledRequestError extends Error {}

class ApiClient {
  private baseURL?: string;
  protected paths: { [k: string]: string };

  public constructor() {
    this.baseURL = process.env.BASE_BACKEND_URL;
    this.paths = {};

    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response) {
          if (error.response.status === 403) {
            logger.warn("An unexpected 403 error occured. Logging out...");
          }
        }
        return Promise.reject(error);
      }
    );
  }

  public setPath(key: string, value: string) {
    this.paths[key] = value;
  }

  public url(key: string) {
    return `${this.baseURL}${this.paths[key]}`;
  }
}

export type Method =
  | "get"
  | "GET"
  | "delete"
  | "DELETE"
  | "head"
  | "HEAD"
  | "options"
  | "OPTIONS"
  | "post"
  | "POST"
  | "put"
  | "PUT"
  | "patch"
  | "PATCH"
  | "link"
  | "LINK"
  | "unlink"
  | "UNLINK";

export const makeCall = async (
  endpoint: string,
  method: Method,
  params?: any
) => {
  const config: {
    method: Method;
    url: string;
    headers: any;
    data?: any;
    params?: any;
  } = {
    method,
    url: `${process.env.BASE_BACKEND_URL}${endpoint}`,
    headers: getHeaders(),
  };
  switch (method) {
    case "GET":
      config.params = params;
      break;
    case "POST":
      config.data = params;
      break;
    case "DELETE":
      config.url = `${config.url}${params}/`;
      break;
    case "PATCH":
      config.url = `${config.url}${params.id}/`;
      config.data = params;
      break;
    default:
      config.params = params;
  }
  const response = await axios.request(config);
  return response;
};

export default ApiClient;
