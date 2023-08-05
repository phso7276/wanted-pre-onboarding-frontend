import { baseInstance } from "utils/instance";

/** 회원가입 api 호출 */
export const signupApi = async (userInfo) => {
  try {
    const response = await baseInstance.post("/auth/signup", userInfo);

    return response;
  } catch (error) {
    console.error("error", error);
  }
};
