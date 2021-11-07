import { API_BASE_URI } from "../utils/config";
import HttpApiClient from "./http-api-client";
import ApiClient from "./api-client";


export default function createApiClient(): ApiClient {
  if (process.env.NODE_ENV === "production") {
    if (API_BASE_URI !== undefined) {
      return new HttpApiClient(API_BASE_URI);
    } else {
      throw Error("Unable to fetch API url in production");
    }
  } else {
    if (API_BASE_URI !== undefined) {
      return new HttpApiClient(API_BASE_URI);
    } else {
      return new HttpApiClient("http://localhost:4000");
    }
  }
}
