import styled from "styled-components";

export const NavContainer = styled.nav`
  background: #fff;
  height: 70px;
  display: flex;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  @media screen and (max-width: 960px) {
    transition: 0.9s all ease;
  }
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  width: 100%;
  @media screen and (max-width: 960px) {
    justify-content: center;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
  @media screen and (max-width: 960px) {
    justify-content: space-between;
    padding: 0;
  }
`;

export const Details = styled.span`
  text-decoration: none;
  font-size: 19px;
  font-weight: 500;
  cursor: pointer;
  padding: 0 20px;
  &:hover {
    color: #607274;
    text-decoration: underline;
    text-decoration-color: #38f094;
    text-underline-offset: 5px;
  }
`;

export const BtnContainer = styled.button`
  display: flex;
  width: 110px;
  height: 100%;
  background-color: #000;
  align-items: center;
  border: none;
  justify-content: center;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #38f094;
    text-underline-offset: 5px;
  }
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const BtnText = styled.span`
  text-decoration: none;
  font-size: 19px;
  font-weight: 500;
  cursor: pointer;
  color: #fff;
`;
