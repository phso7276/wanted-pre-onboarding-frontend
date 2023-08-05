import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "components/atoms/button";
import useValidation from "hooks/useValidation";
import { signupApi } from "services/apis/signupApi";
import useIsLoggedIn from "hooks/useIsLoggedIn";
import { FormContainer } from "styles/globalStyles";
import { Label, SignupBox, SignupInput } from "./style";

const SignupPage = () => {
  useIsLoggedIn();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { isValid } = useValidation(form);

  const navigate = useNavigate();

  const onClickHandler = (e) => {
    e.preventDefault();
    signupApi(form)
      .then((res) => {
        console.log(res.status);
        if (res.status === 201) {
          navigate("/signin");
        }
      })
      .catch(() => {});
  };

  const changeEmail = (e) => {
    setForm({ ...form, email: e.target.value });
  };
  const changePassword = (e) => {
    setForm({ ...form, password: e.target.value });
  };
  return (
    <FormContainer>
      <Label>회원가입</Label>
      <form>
        <SignupBox>
          <SignupInput
            testid={"email-input"}
            type={"email"}
            placeholder={"이메일"}
            value={form.email}
            onChange={changeEmail}
          />
          <SignupInput
            testid="password-input"
            type="password"
            placeholder="비밀번호"
            value={form.password}
            onChange={changePassword}
          />
        </SignupBox>
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
            disabled
          />
        )}
      </form>
      <br />
      <Link to="/signin">이미 계정이 있다면👉 로그인</Link>
    </FormContainer>
  );
};

export default SignupPage;
