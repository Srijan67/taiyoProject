export const BASE_URL = "https://disease.sh/v3/covid-19";
export const getAllCovidUrl = () => {
  return BASE_URL + "/all";
};
export const getCountryWiseCovidUrl = () => {
  return BASE_URL + "/countries";
};
export const getAllDateWiseCovidUrl = () => {
  return BASE_URL + "/historical/all?lastdays=all";
};
