import React, { useEffect, useState } from "react";
import useIsLoggedIn from "hooks/useIsLoggedIn";
import Input from "components/atoms/Input";
import Button from "components/atoms/button";
import TodoItemList from "./components/TodoItemList";
import { getTodoApi, createTodoApi } from "services/apis/todoApi";

const TodoPage = () => {
  useIsLoggedIn();
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    getTodoApi().then((res) => {
      setTodoList(res.data);
    });
  }, []);

  const onClickHandler = () => {
    /**post api호출 */
    createTodoApi(todo).then((res) => {
      setTodoList((currentArr) => [res.data, ...currentArr]);
    });
  };

  return (
    <div>
      <div>투두리스트</div>
      <Input
        data-testid="new-todo-input"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <Button
        data-testid="new-todo-add-button"
        text="추가"
        onClickHandler={onClickHandler}
      />
      {todoList.map((item) => {
        return (
          <TodoItemList
            todo={item}
            key={item.id}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        );
      })}
    </div>
  );
};

export default TodoPage;
