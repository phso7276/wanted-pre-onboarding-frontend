import React from "react";
import { FormContainer } from "styles/globalStyles";
import { Link } from "react-router-dom";
import Button from "components/atoms/button";
import { ButtonBox, Label } from "./style";

export default function MainPage() {
  return (
    <FormContainer>
      <Label>🏠 HOMEPAGE 🏠</Label>
      <ButtonBox>
        <Link to="/signup">
          <Button text="회원가입" />
        </Link>
        <Link to="/signin">
          <Button text="로그인" />
        </Link>
        <Link to="/todo">
          <Button text="Todo-list" />
        </Link>
      </ButtonBox>
    </FormContainer>
  );
}
