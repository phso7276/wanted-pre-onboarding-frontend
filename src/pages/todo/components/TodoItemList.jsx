import React from "react";
import TodoItem from "components/organisms/Todoitem";

const TodoItemList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((item) => {
        return <TodoItem item={item} key={item.id} />;
      })}
    </ul>
  );
};

export default TodoItemList;
