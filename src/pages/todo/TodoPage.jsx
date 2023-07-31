import useIsLoggedIn from "hooks/useIsLoggedIn";
import Input from "components/atoms/Input";
import Button from "components/atoms/button";
const TodoPage = () => {
  useIsLoggedIn();
  return (
    <div>
      <div>투두리스트</div>
      <Input data-testid="new-todo-input" />
      <Button data-testid="new-todo-add-button" text="추가" />
    </div>
  );
};

export default TodoPage;
