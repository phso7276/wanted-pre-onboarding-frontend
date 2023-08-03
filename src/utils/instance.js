import axios from "axios";

const baseURL = "https://www.pre-onboarding-selection-task.shop";
// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";

const baseAPI = (url, options) => {
  return axios.create({
    baseURL: url,
    headers: {
      "content-type": "application/json;charset=UTF-8",
      accept: "application/json,",
    },
    ...options,
  });
};

const authAPI = (url, options) => {
  return axios.create({
    baseURL: url,
    headers: {
      "content-type": "application/json;charset=UTF-8",
      accept: "application/json,",
    },

    ...options,
  });
};

export const baseInstance = baseAPI(baseURL);
export const authInstance = authAPI(baseURL);

authInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers["Authorization"] = `Bearer ${token}`;

  return config;
});
