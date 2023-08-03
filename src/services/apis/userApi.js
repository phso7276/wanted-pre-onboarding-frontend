import { baseInstance } from "utils/instance";

/** 로그인 api */
export const signinApi = async (userInfo, expirationDate) => {
  try {
    const response = await baseInstance.post("/auth/signin", userInfo);

    // if (response.data["status"] === 200) {
    //   localStorage.setItem("token");
    // }

    return response;
  } catch (error) {
    console.error("error", error);
  }
};
