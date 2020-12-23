import styled from "styled-components/macro";

export const Frame = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1500px;
`;

export const Container = styled.div``;

export const Background = styled.img`
  width: 100%;
  z-index: -1;
  margin-bottom: -150px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));

  @media (max-width: 600px) {
    margin-bottom: -58px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 1;
  margin-left: 5px;
  margin-right: 5px;
`;
