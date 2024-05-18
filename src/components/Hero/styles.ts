import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 700px;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-style: solid;
  color: #000;
  @media screen and (max-width: 960px) {
    border-width: 0;
    height: 28%;
  }
`;

export const HeaderText = styled.span`
  color: #000;
  opacity: 0.75;
  font-size: 48px;
  font-weight: 900;
  margin-bottom: 18px;
  @media screen and (max-width: 960px) {
    font-size: 32px;
    font-weight: 900;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  border-width: 2px;
  border-style: solid;
  color: #000;
  @media screen and (max-width: 960px) {
    padding: 0;
    border-width: 0;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 100%;
  }
`;
