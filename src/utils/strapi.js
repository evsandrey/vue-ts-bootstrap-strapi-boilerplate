import Strapi from "strapi-sdk-javascript/build/main";

const apiUrl =
  process.env.API_URL ||
  "http://1a818e70-832b-4c7e-b149-bf3cc68fba1a.pub.cloud.scaleway.com:1337";
const strapi = new Strapi(apiUrl);

export default strapi;
export { apiUrl };
