import React from "react";
// styles //
import {
  HeroContainer,
  HeaderContainer,
  HeaderText,
  ImgContainer,
  Img,
} from "./styles";

const Hero = () => {
  return (
    <HeroContainer>
      <HeaderContainer>
        <HeaderText>Hello and welcome to my portfolio!</HeaderText>
      </HeaderContainer>
      <ImgContainer>
        <Img src={require("../assets/portfolio.png")} />
      </ImgContainer>
    </HeroContainer>
  );
};

export default Hero;
