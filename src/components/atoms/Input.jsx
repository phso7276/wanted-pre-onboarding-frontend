const validation = (type, value) => {
  switch (type) {
    case "email":
      const emailExp =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      if (!emailExp.test(value)) {
        return false;
      }
      break;
    case "password":
      const pwExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8}$/;
      if (!pwExp.test(value)) {
        return false;
      }
      break;
    default:
      return "";
  }
};

export default function Input(props) {
  const validText = validation(props.type, props.value);
  return (
    <div>
      <input
        data-testid={props.testid}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handler}
      />
      <div>{validText}</div>
    </div>
  );
}
