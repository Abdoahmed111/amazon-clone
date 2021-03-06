import styled from "styled-components/macro";

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 10px;
  padding: 20px;
  max-height: 400px;
  max-width: 50%;
  min-width: 100px;
  background-color: white;
  z-index: 1;
  border: none;
  border-radius: 10px;
  transition: all ease-in-out 0.25s;

  &:hover {
    transform: scale(1.035);
  }

  @media (max-width: 600px) {
    max-width: 80%;
  }
`;

export const Info = styled.div`
  text-align: left;
  height: 100px;
  margin-bottom: 10px;
`;

export const Price = styled.p`
  margin-top: 5px;
`;

export const Rating = styled.div`
  display: flex;
`;

export const Image = styled.img`
  max-height: 200px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  background: #f0c14b;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  border-radius: 3px;
  color: #111;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
