import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "components/atoms/Input";
import Button from "components/atoms/button";
import useValidation from "hooks/useValidation";
import { signupApi } from "services/apis/signupApi";
import useIsLoggedIn from "hooks/useIsLoggedIn";

const SignupPage = () => {
  useIsLoggedIn();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { isValid } = useValidation(form);
  // useEffect(() => {
  //   console.log(isValid);
  // }, [isValid]);

  const navigate = useNavigate();

  const onClickHandler = () => {
    signupApi(form).then((res) => {
      console.log(res.status);
      if (res.status === 201) {
        navigate("/signin");
      }
    });
  };

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
        <Button
          testid="signup-button"
          type="button"
          text="회원가입"
          onClickHandler={onClickHandler}
        />
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
