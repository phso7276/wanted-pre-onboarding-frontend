import { async } from "q";
import { authInstance } from "utils/instance";

export const getTodoApi = async () => {
  try {
    const response = await authInstance.get("/todos");
    return response;
  } catch (error) {
    console.error("error", error);
    return [];
  }
};

export const createTodoApi = async (todo) => {
  try {
    const response = await authInstance.post("/todos", { todo: todo });
    return response;
  } catch (error) {
    return error;
  }
};
