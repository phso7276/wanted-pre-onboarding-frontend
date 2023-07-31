import axios from "axios";

const baseURL = "https://www.pre-onboarding-selection-task.shop";
// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";

const baseAPI = (url, options) => {
  //console.log(options);
  return axios.create({ baseURL: url, ...options });
  //return axios.create({ baseURL: url, withCredentials: true, ...options });
};

const authAPI = (url, options) => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: url,
    headers: { Authorization: `Bearer ${token}` },
    ...options,
  });
};

export const baseInstance = baseAPI(baseURL);
export const authInstance = authAPI(baseURL);
