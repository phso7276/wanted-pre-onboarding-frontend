import Input from "../atoms/Input";
const TodoItem = ({ item, idx }) => {
  return (
    <li key={idx}>
      <label>
        <Input type="checkbox" />
        <span>{item}</span>
      </label>
    </li>
  );
};

export default TodoItem;
