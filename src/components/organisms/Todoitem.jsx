import Input from "../atoms/Input";
const TodoItem = ({ item }) => {
  return (
    <li>
      <label>
        <Input type={"checkbox"} checked={item.isCompleted} />
        <span>{item.todo}</span>
      </label>
    </li>
  );
};

export default TodoItem;
