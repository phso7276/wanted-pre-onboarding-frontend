import React, { useState } from "react";
import TodoItem from "components/organisms/Todoitem";
import Button from "../../../components/atoms/button";
import Input, { StyledInput } from "../../../components/atoms/Input";
import { updateTodoApi, deleteTodoApi } from "services/apis/todoApi";
import { styled } from "styled-components";
import { ItemList, ButtonBox } from "../style";

const TodoItemList = ({ todo, todoList, setTodoList }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newText, setNewText] = useState(todo.todo);

  const checkboxHandler = (e) => {
    const newValue = e.target.checked;
    updateTodoApi(todo.id, todo.todo, newValue).then((res) => {
      const data = res.data;
      console.log(data);
      setTodoList(
        todoList.map((item) =>
          item.id === todo.id
            ? { ...item, isCompleted: data.isCompleted }
            : item
        )
      );
    });
  };

  const onClickUpdateTodo = () => {
    updateTodoApi(todo.id, newText, todo.isCompleted).then((res) => {
      const data = res.data;
      console.log(data);
      setTodoList(
        todoList.map((item) =>
          item.id === todo.id ? { ...item, todo: data.todo } : item
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
    <div>
      <ItemList>
        <label>
          <Input
            type={"checkbox"}
            checked={todo.isCompleted}
            onChange={checkboxHandler}
            value={todo.id}
          />
          {isEdit ? (
            <>
              <Input
                data-testid="modify-input"
                value={newText}
                onChange={(e) => {
                  setNewText(e.target.value);
                }}
              />
            </>
          ) : (
            <>
              <span>{todo.todo}</span>
            </>
          )}
        </label>
        <ButtonBox>
          {isEdit ? (
            <>
              <Button
                data-testid="submit-button"
                text={"제출"}
                onClickHandler={() => {
                  onClickUpdateTodo();
                  setIsEdit(false);
                }}
              />
              <Button
                data-testid="cancel-button"
                text={"취소"}
                onClickHandler={() => {
                  setIsEdit(false);
                  setNewText(todo.todo);
                }}
              />
            </>
          ) : (
            <>
              <Button
                data-testid="modify-button"
                text={"수정"}
                onClickHandler={() => {
                  setIsEdit(true);
                }}
              />
              <Button
                data-testid="delete-button"
                text={"삭제"}
                onClickHandler={deleteItem}
              />
            </>
          )}
        </ButtonBox>
      </ItemList>
    </div>
  );
};

export default TodoItemList;

// const ItemList = styled.li`
//   list-style: none;
//   display: flex;
//   gap: 12px;
// `;

// const ButtonBox = styled.div`
//   display: flex;
//   gap: 3px;
// `;
