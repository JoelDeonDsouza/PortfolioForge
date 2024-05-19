import React from "react";
import {
  MarqueeContainer,
  MarqueeContent,
  MarqueeText,
  HeroContainer,
  HeaderContainer,
  LanguageContainerJs,
  LanguageContainerTs,
  GithubContainer,
  AnimationContainer,
  AninationContent,
  Projects,
  DisplayContainer,
  Expo,
  PythonLanguage,
  Node,
} from "./styles";

interface PortfolioProps {
  id: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ id }) => {
  return (
    <>
      <MarqueeContainer id={id}>
        <MarqueeContent>
          <MarqueeText>
            I invite you to delve into the projects I've highlighted below. Each
            one represents a unique facet of my work and showcases my skills and
            creativity.
          </MarqueeText>
        </MarqueeContent>
      </MarqueeContainer>
      <HeroContainer>
        <HeaderContainer>
          <LanguageContainerJs />
          <LanguageContainerTs />
          <GithubContainer />
        </HeaderContainer>
        <AnimationContainer>
          <AninationContent />
          <Projects />
        </AnimationContainer>
        <DisplayContainer>
          <Expo />
          <PythonLanguage />
          <Node />
        </DisplayContainer>
      </HeroContainer>
    </>
  );
};

export default Portfolio;
