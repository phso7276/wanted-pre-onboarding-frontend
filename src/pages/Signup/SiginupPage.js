import React, { useState, useEffect } from "react";
import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/button";
import useValidation from "../../hooks/useValidation";
const SignupPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { isValid } = useValidation(form);
  useEffect(() => {
    console.log(isValid);
  }, [isValid]);

  const changeEmail = (e) => {
    setForm({ ...form, email: e.target.value });
  };
  const changePassword = (e) => {
    setForm({ ...form, password: e.target.value });
  };
  return (
    <div>
      <Input
        testid="email-input"
        type="email"
        placeholder="이메일"
        value={form.email}
        handler={changeEmail}
      />
      <Input
        testid="password-input"
        type="password"
        placeholder="비밀번호"
        value={form.password}
        handler={changePassword}
      />

      {isValid.isEmail && isValid.isPassword ? (
        <Button testid="signup-button" type="button" text="회원가입" />
      ) : (
        <Button
          testid="signup-button"
          type="button"
          text="회원가입"
          disabled="true"
        />
      )}
    </div>
  );
};

export default SignupPage;
