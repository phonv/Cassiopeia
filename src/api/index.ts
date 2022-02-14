import axios from "axios";

const URL_BASE = "http://localhost:4000/";
const PRODUCT_DETAIL_URL = URL_BASE + "products/";
const POLICIES_URL = URL_BASE + "policies/";

const fetchData = async (url: string) => {
  let result;
  try {
    const response = await axios.get(url);
    result = response.data;
  } catch (err) {
    console.error(err);
  }
  return result;
};

export { PRODUCT_DETAIL_URL, POLICIES_URL, fetchData };
