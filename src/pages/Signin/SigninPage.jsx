import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Button from "components/atoms/button";
import { signinApi } from "services/apis/userApi";
import useIsLoggedIn from "hooks/useIsLoggedIn";
import { FormContainer } from "../../styles/globalStyles";
import { Label, LoginBox, LoginInput } from "./style";

const SigninPage = () => {
  useIsLoggedIn();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onClickHandler = (e) => {
    if (form.email === "" || form.password === "") {
      alert("아이디와 비밀번호를 입력해주세요");
      e.preventDefault();
      return false;
    }
    e.preventDefault();
    signinApi(form)
      .then((res) => {
        if (res.status === 200) {
          //access token local storage에 저장
          localStorage.setItem("token", res.data["access_token"]);
          navigate("/todo");
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
      <Label>Login</Label>
      <form>
        <LoginBox>
          <LoginInput
            testid={"email-input"}
            type={"email"}
            placeholder={"이메일"}
            value={form.email}
            onChange={changeEmail}
          />
          <LoginInput
            testid={"password-input"}
            type={"password"}
            placeholder={"비밀번호"}
            value={form.password}
            onChange={changePassword}
          />
        </LoginBox>
        <Button
          testid={"signin-button"}
          text={"로그인"}
          onClickHandler={onClickHandler}
        />
      </form>
      <br />
      <Link to="/signup">아직 회원이 아니라면👉 회원가입</Link>
    </FormContainer>
  );
};

export default SigninPage;
