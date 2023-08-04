import { StyledInput } from "components/atoms/Input";
import styled from "styled-components";
import { Container } from "../../styles/globalStyles";

export const Label = styled.span`
  font-size: 18px;
  color: rgb(5, 48, 157);
  padding: 10px 12px;
  display: flex;
`;

export const LoginBox = styled(Container)`
  padding: 10px 0px;
`;

export const LoginInput = styled(StyledInput)`
  border: none;
  background: #e9ecef;
  border-radius: 5px;
`;
