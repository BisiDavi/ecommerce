import axios from "axios";

export default async function useLiveHealthyProduct() {
  return await axios.get("/api/get-livehealthy-product");  
}
