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
    setTodo("");
    /**post api호출 */
    createTodoApi(todo).then((res) => {
      setTodoList([...todoList].concat(res.data));
    });
  };

  return (
    <TodoContainer>
      <TodoHeader>
        <NewInput
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
// const NewInput = styled(StyledInput)`
//   border: none;
//   background: #e9ecef;
//   border-radius: 5px;
//   padding: 5px 10px;
//   width: 20rem;
// `;

// const TodoHeader = styled.form`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 10px;
//   gap: 10px;
// `;
