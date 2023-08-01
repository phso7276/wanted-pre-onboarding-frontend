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

export const updateTodoApi = async (item) => {
  try {
    const response = await authInstance.put(`/todos/${item.id}`, {
      todo: item.todo,
      isCompleted: !item.isCompleted,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteTodoApi = async (id) => {
  try {
    const response = await authInstance.delete(`/todos/${id}`);

    return response;
  } catch (error) {
    console.log(error);
  }
};
