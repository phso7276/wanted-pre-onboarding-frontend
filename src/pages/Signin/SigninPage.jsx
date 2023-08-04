import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router";
import Input, { StyledInput } from "components/atoms/Input";
import Button from "components/atoms/button";
import { signinApi } from "services/apis/userApi";
import useIsLoggedIn from "hooks/useIsLoggedIn";
import { FormContainer, Container } from "../../styles/globalStyles";
import styled from "styled-components";
import { Label, LoginBox, LoginInput } from "./style";

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
    <FormContainer>
      <Label>Login</Label>
      <form>
        <LoginBox>
          <LoginInput
            testid="email-input"
            type="email"
            placeholder="이메일"
            value={form.email}
            onChange={changeEmail}
          />
          <LoginInput
            testid="password-input"
            type="password"
            placeholder="비밀번호"
            value={form.password}
            onChange={changePassword}
          />
        </LoginBox>
        <Button
          testid="signin-button"
          text="로그인"
          onClickHandler={onClickHandler}
        />
      </form>
    </FormContainer>
  );
};

// const Label = styled.span`
//   font-size: 18px;
//   color: rgb(5, 48, 157);
//   padding: 10px 12px;
//   display: flex;
// `;

// const LoginBox = styled(Container)`
//   padding: 10px 0px;
// `;

// const NewInput = styled(StyledInput)`
//   border: none;
//   background: #e9ecef;
//   border-radius: 5px;
// `;

export default SigninPage;
