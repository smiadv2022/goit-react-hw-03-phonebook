import styled from '@emotion/styled';
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background-color: rgb(225, 210, 225);
  padding: 5px;

  border-radius: 10px;
`;

export const Button = styled.button`
  display: flex;
  padding: 1px;

  background-color: rgba(0, 0, 0, 0.25) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.28) 0px 0px 0px 1px;
  color: blue;
  font-size: 600;
  line-height: 1.25rem;
  font-weight: 600;
  justify-content: center;
  width: 80px;
  margin-left: auto;
  border-radius: 10px;
  border-color: blue;

  :hover {
      background-color: rgba(181, 275, 281, 0.3);
    color: black;

    box-shadow: rgba(0, 0, 0, 0.25) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.28) 0px 0px 0px 1px;
  }
  }
`;
export const List = styled.ul`
  padding: 0px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 600;

  border: 2px solid rgba(33, 33, 33, 0.2);
  padding: 10px;
  width: 90%;
  background-color: rgba(181, 175, 181, 0.5);
  border-radius: 10px;
`;
export const Item = styled.li`
  display: flex;
  gap: 5px;
  align-items: center;

  padding: 5px;
  font-size: 400;

  line-height: 1rem;
  border: 1px solid lightgray;
  border-radius: 10px;
  color: black;
`;
export const Title = styled.h2`
  margin: 0px;
  padding: 0px;
  color: #111827;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
  letter-spacing: -0.025em;
`;
