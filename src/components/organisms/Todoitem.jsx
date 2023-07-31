import React, { useSyncExternalStore } from "react";
import Input from "../atoms/Input";
const TodoItem = ({ item, checkboxHandler }) => {
  return (
    <li>
      <label>
        <Input
          type={"checkbox"}
          checked={item.isCompleted}
          onChange={checkboxHandler}
          value={item.id}
        />
        <span>{item.todo}</span>
      </label>
    </li>
  );
};

export default TodoItem;
