export default function Input(props) {
  return (
    <div>
      <input
        data-testid={props.testid}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
