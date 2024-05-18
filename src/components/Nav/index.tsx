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
          <Details>HI 👋🏼</Details>
          <Details>About</Details>
          <Details>Projects</Details>
        </DetailsContainer>
        <BtnContainer>
          <BtnText>Contact</BtnText>
        </BtnContainer>
      </NavContent>
    </NavContainer>
  );
};

export default Nav;
