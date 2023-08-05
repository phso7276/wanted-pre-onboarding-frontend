import { baseInstance } from "utils/instance";

/** 로그인 api */
export const signinApi = async (userInfo) => {
  try {
    const response = await baseInstance.post("/auth/signin", userInfo);

    return response;
  } catch (error) {
    alert(error.response.data["message"]);
  }
};
