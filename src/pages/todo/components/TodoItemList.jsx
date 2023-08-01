import React from "react";
import TodoItem from "components/organisms/Todoitem";
import { updateTodoApi, deleteTodoApi } from "services/apis/todoApi";

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

  const deleteItem = () => {
    deleteTodoApi(todo.id).then((res) => {
      console.log(res);
      setTodoList(todoList.filter((item) => item.id !== todo.id));
    });
  };
  return (
    <ul>
      <TodoItem
        item={todo}
        key={todo.id}
        checkboxHandler={checkboxHandler}
        deleteItem={deleteItem}
      />
    </ul>
  );
};

export default TodoItemList;
