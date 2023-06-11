import axios from "axios";
import {
  getAllCovidUrl,
  getAllDateWiseCovidUrl,
  getCountryWiseCovidUrl,
} from "./api";

export const getAllCovidAction = async () => {
  try {
    let { data } = await axios.get(`${getAllCovidUrl()}`);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed To Load!");
  }
};
export const getAllDateWiseCovidAction = async () => {
  try {
    let { data } = await axios.get(`${getAllDateWiseCovidUrl()}`);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed To Load!");
  }
};

export const getCountryWiseCovidAction = async () => {
  try {
    let { data } = await axios.get(`${getCountryWiseCovidUrl()}`);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed To Load!");
  }
};
