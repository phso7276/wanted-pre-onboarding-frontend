import { styled } from "styled-components";
import { StyledInput } from "components/atoms/Input";

export const NewInput = styled(StyledInput)`
  border: none;
  background: #e9ecef;
  border-radius: 5px;
  padding: 5px 10px;
  width: 20rem;
`;
export const TodoHeader = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
`;

export const ItemList = styled.li`
  list-style: none;
  display: flex;
  gap: 12px;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 3px;
`;
