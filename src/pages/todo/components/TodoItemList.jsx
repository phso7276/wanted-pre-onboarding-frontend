import React from "react";
import TodoItem from "components/organisms/Todoitem";
import { getTodoApi } from "services/apis/todoApi";
const TodoItemList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((item, idx) => {
        return <TodoItem item={item.contents} idx={idx} />;
      })}
    </ul>
  );
};

export default TodoItemList;
