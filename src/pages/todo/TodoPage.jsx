import React, { useEffect, useState } from "react";
import useIsLoggedIn from "hooks/useIsLoggedIn";
import Input from "components/atoms/Input";
import Button from "components/atoms/button";
import TodoItemList from "./components/TodoItemList";
import { getTodoApi } from "services/apis/todoApi";

const TodoPage = () => {
  useIsLoggedIn();
  const [todoList, setTodoList] = useState([
    {
      contents: "투두 1",
    },
    {
      contents: "투두 2",
    },
  ]);
  useEffect(() => {
    getTodoApi().then((res) => {
      console.log(res);
      setTodoList(res.data);
    });
  }, []);
  return (
    <div>
      <div>투두리스트</div>
      <Input data-testid="new-todo-input" />
      <Button data-testid="new-todo-add-button" text="추가" />
      <TodoItemList todoList={todoList} />
    </div>
  );
};

export default TodoPage;
