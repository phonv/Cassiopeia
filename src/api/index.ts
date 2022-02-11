import axios from "axios";

const URL_BASE = process.env.REACT_APP_API_BASE_URL;
const PRODUCT_DETAIL_URL = URL_BASE + "product-detail/";
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
