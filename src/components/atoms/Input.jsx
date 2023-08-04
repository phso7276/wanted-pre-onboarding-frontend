import React from "react";
import styled from "styled-components";

export default function Input(props) {
  return (
    <StyledInput
      data-testid={props.testid}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      checked={props.checked}
    />
  );
}

export const StyledInput = styled.input`
  padding: 12px 10px;
`;
