export default function Button(props) {
  return (
    <div>
      <button
        data-testid={props.testid}
        type={props.type}
        disabled={props.disabled}
      >
        {props.text}
      </button>
    </div>
  );
}
