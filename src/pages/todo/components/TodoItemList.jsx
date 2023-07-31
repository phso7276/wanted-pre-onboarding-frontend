import React from "react";
import TodoItem from "components/organisms/Todoitem";
import { updateTodoApi, getTodoApi } from "services/apis/todoApi";

const TodoItemList = ({ todo, todoList, setTodoList }) => {
  const checkboxHandler = () => {
    updateTodoApi(todo).then((res) => {
      console.log(res);
      const data = res.data;

      setTodoList(
        todoList.map((item) =>
          item.id === todo.id
            ? { ...item, isCompleted: data.isCompleted }
            : item
        )
      );
    });
  };
  return (
    <ul>
      <TodoItem item={todo} key={todo.id} checkboxHandler={checkboxHandler} />
    </ul>
  );
};

export default TodoItemList;
