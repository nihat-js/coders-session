import { baseURL } from "../consts/consts";
import  axios  from "axios";
export const getCityInfo = async (city) => {
  try {
    let response = await axios.get(baseURL + "&q="+city);
    return response.data
  } catch (err) {
    // console.log(err);
    // return new Error"somethin went wrong")
  }
};