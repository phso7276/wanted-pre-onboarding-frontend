import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router";
import Input from "components/atoms/Input";
import Button from "components/atoms/button";
import { signinApi } from "services/apis/userApi";
import useIsLoggedIn from "hooks/useIsLoggedIn";
import { Container } from "../../styles/globalStyles";

const SigninPage = () => {
  useIsLoggedIn();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onClickHandler = (e) => {
    e.preventDefault();
    signinApi(form).then((res) => {
      console.log(res.data["access_token"]);
      if (res.status === 200) {
        //access token local storage에 저장
        localStorage.setItem("token", res.data["access_token"]);
        navigate("/todo");
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
    <Container>
      <form>
        <Input
          testid="email-input"
          type="email"
          placeholder="이메일"
          value={form.email}
          onChange={changeEmail}
        />
        <Input
          testid="password-input"
          type="password"
          placeholder="비밀번호"
          value={form.password}
          onChange={changePassword}
        />
        <Button
          testid="signin-button"
          text="로그인"
          onClickHandler={onClickHandler}
        />
      </form>
    </Container>
  );
};

export default SigninPage;
