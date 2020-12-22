import styled from "styled-components/macro";

export const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Logo = styled.img`
  width: 100px;
  object-fit: contain;
  margin: 0 20px;
  margin-top: 18px;
`;

export const Search = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;
`;

export const SearchInput = styled.input`
  height: 12px;
  padding: 10px;
  border: none;
  width: 100%;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const NavOpt = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  color: white;
`;

export const OptText = styled.p`
  font-size: 13px;
  font-weight: 800;
  margin-left: ${({ lastItem }) => lastItem && "10px"};
  margin-right: ${({ lastItem }) => lastItem && "10px"};
`;

export const TextSmall = styled.p`
  font-size: 10px;
`;

export const BasketContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;
