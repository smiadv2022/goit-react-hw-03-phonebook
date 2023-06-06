import styled from '@emotion/styled';
export const Label = styled.label`
  display: block;
  font-weight: 500;
  // margin-bottom: 10px;
  margin-left: 10px;
  color: blue;
`;
export const InputFilter = styled.input`
  display: block;
  width: 70%;

  padding: 10px;
  margin-bottom: 10px;
  overflow: hidden;
  border-radius: 10px;
  outline: transparent;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.28) 0px 0px 0px 1px;

  border-color: blue;
  background-color: rgba(243, 237, 243, 0.937);
  cursor: pointer;
  &:hover {
    background-color: rgba(181, 275, 281, 0.3);
    color: black;

    box-shadow: rgba(0, 0, 0, 0.25) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.28) 0px 0px 0px 1px;
  }
`;
