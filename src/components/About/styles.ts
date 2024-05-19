import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 400px;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    height: 850px;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  width: 30%;
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
    width: 100%;
    height: 100%;
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

export const TextContainer = styled.div`
  display: flex;
  border-width: 2px;
  border-style: solid;
  color: #000;
  width: 100%;
  height: 100%;
  padding: 0px 20px;
  width: 90%;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    border-width: 0;
    padding: 20px 20px;
  }
`;

export const MainText = styled.span`
  font-size: 22px;
  line-height: 2;
  font-weight: 700;
  opacity: 0.7;
  letter-spacing: 0.5px; 
  @media screen and (max-width: 960px) {
    font-size: 16px;
    text-align: start;
    line-height: 1.5;
  }
`;
