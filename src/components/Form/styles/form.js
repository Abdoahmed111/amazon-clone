import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
  object-fit: contain;
  width: 100px;
  margin-right: auto;
  margin-left: auto;
`;

export const Error = styled.div``;

export const Title = styled.h1`
  text-align: center;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  margin-top: 15px;
  font-size: 12px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Link = styled(ReactRouterLink)`
  width: 100%;
  height: 30px;
  margin-top: 10px;
`;

export const Input = styled.input`
  height: 30px;
  margin-bottom: 10px;
  background-color: white;
  width: 98%;
`;

export const Base = styled.form`
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 20px;
`;

export const Submit = styled.button`
  background: #f0c14b;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
`;
