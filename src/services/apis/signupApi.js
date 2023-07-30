import { baseInstance } from "utils/instance";

/** 회원가입 api 호출 */
export const signupApi = async (userInfo) => {
  try {
    const response = await baseInstance.post("/auth/signup", userInfo);

    // if (response.data["status"] === 200) {
    //   Storage.setCurrentUser(userInfo["user_id"]);
    // }

    return response;
  } catch (error) {
    console.error("error", error);
  }
};
