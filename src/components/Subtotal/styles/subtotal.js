import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100px;
  padding: 20px;
  background-color: #f3f3f3;
  border: 1px solid 3px;
  border-radius: 3px;
`;

export const Title = styled.p``;

export const Gift = styled.p`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  margin-right: 5px;
`;

export const Button = styled.button`
  background: #f0c14b;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
`;
