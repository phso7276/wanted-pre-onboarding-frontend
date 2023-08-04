import React from "react";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  background: #e9ecef;

  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

/** 로그인, 회원가입 컨테이너 */
export const FormContainer = styled.div`
  width: 312px;
  height: 240px;

  display: flex;
  flex-direction: column;
  //align-items: center;
  justify-content: center;

  //margin: auto;

  background-color: white;
  padding: 2rem 2.5rem 3rem;
  border-radius: 10px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;

/** 투두리스트 */
export const TodoContainer = styled.div`
  width: 512px;
  height: 768px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-top: 95px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;
