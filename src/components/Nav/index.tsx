import React from "react";
// styles //
import {
  NavContainer,
  NavContent,
  DetailsContainer,
  Details,
  BtnContainer,
  BtnText,
} from "./styles";

const Nav = () => {
  return (
    <NavContainer>
      <NavContent>
        <DetailsContainer>
          <Details>
            <a href="#hero">HI 👋🏼</a>
          </Details>
          <Details>
            <a href="#about">About</a>
          </Details>
          <Details>
            <a href="#portfolio">Projects</a>
          </Details>
        </DetailsContainer>
        <BtnContainer>
          <BtnText>Contact</BtnText>
        </BtnContainer>
      </NavContent>
    </NavContainer>
  );
};

export default Nav;
