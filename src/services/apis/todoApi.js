import { async } from "q";
import { authInstance } from "utils/instance";

export const getTodoApi = async () => {
  try {
    const response = await authInstance.get("/todos");
    return response;
  } catch (error) {
    console.error("error", error);
  }
};
