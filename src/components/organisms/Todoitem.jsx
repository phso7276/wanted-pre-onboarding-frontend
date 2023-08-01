import React, { useSyncExternalStore } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/button";
const TodoItem = ({ item, checkboxHandler, deleteItem }) => {
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
      <Button data-testid="modify-button" text={"수정"}>
        수정
      </Button>
      <Button
        data-testid="delete-button"
        text={"삭제"}
        onClickHandler={deleteItem}
      >
        삭제
      </Button>
    </li>
  );
};

export default TodoItem;
