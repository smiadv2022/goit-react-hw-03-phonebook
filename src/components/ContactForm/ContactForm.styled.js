import styled from '@emotion/styled';

export const Form = styled.form`
  border: 2px solid rgba(33, 33, 33, 0.2);
  padding: 10px;
  width: 90%;
  background-color: rgba(181, 175, 181, 0.5);
  border-radius: 10px;
`;
export const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 10px;
`;
export const InputContact = styled.input`
  display: block;
  width: 80%;

  padding: 10px;
  margin-bottom: 10px;
  overflow: hidden;
  border-radius: 10px;
  outline: transparent;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.28) 0px 0px 0px 1px;

  background-color: rgba(181, 175, 181, 0.5);
  background-color: rgba(243, 237, 243, 0.937);
  cursor: pointer;
  &:hover {
    background-color: rgba(181, 275, 281, 0.3);
    color: black;

    box-shadow: rgba(0, 0, 0, 0.25) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.28) 0px 0px 0px 1px;
  }
`;

export const Button = styled.button`
  display: flex;
  padding: 0.375rem 0.75rem;

  background-color: rgba(181, 175, 181, 0.9);
  background-color: rgba(0, 0, 0, 0.25) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.28) 0px 0px 0px 1px;
  color: blue;
  font-size: 600;
  line-height: 1.25rem;
  font-weight: 600;
  justify-content: center;
  width: 120px;
  margin-top: 25px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 10px;
  border-color: blue;

  :hover {
    background-color: rgba(231, 120, 131, 0.15);

    color: black;

    box-shadow: rgba(0, 0, 0, 0.25) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.28) 0px 0px 0px 1px;
  }
`;
