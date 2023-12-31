import React, { useEffect, useState } from "react";
import useIsLoggedIn from "hooks/useIsLoggedIn";
import Button from "components/atoms/button";
import TodoItemList from "./components/TodoItemList";
import { TodoContainer } from "../../styles/globalStyles";
import { getTodoApi, createTodoApi } from "services/apis/todoApi";
import { NewInput, TodoHeader } from "./style";

const TodoPage = () => {
  useIsLoggedIn();
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    getTodoApi().then((res) => {
      setTodoList(res.data);
    });
  }, []);

  const onClickHandler = (e) => {
    e.preventDefault();
    if (todo === "") {
      alert("할 일을 입력해 주세요");
      e.preventDefault();
      return false;
    }
    /**post api호출 */
    createTodoApi(todo)
      .then((res) => {
        setTodoList([...todoList].concat(res.data));
        setTodo("");
      })
      .catch(() => {});
  };

  return (
    <TodoContainer>
      <TodoHeader>
        <NewInput
          testid={"new-todo-input"}
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <Button
          testid="new-todo-add-button"
          text={"추가"}
          onClickHandler={onClickHandler}
        />
      </TodoHeader>
      <ul>
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
      </ul>
    </TodoContainer>
  );
};

export default TodoPage;
