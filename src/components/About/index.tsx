import React from "react";
// styles //
import {
  AboutContainer,
  ImgContainer,
  Img,
  TextContainer,
  MainText,
} from "./styles";

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <AboutContainer id={id}>
      <ImgContainer>
        <Img src={require("../assets/about.png")} />
      </ImgContainer>
      <TextContainer>
        <MainText>
          I'm a dynamic web and app developer proficient in a range of
          technologies including JavaScript, Node.js, React, React Native, Swift
          for iOS, and MongoDB Atlas Server. Specializing in creating
          user-centered web applications and mobile apps, I prioritize flawless
          functionality and captivating design. My motivation stems from a
          genuine love for problem-solving, consistently pushing myself to
          achieve outstanding outcomes. I firmly believe that empathy is the
          cornerstone of successful collaboration and solution-driven work in
          any professional setting.
        </MainText>
      </TextContainer>
    </AboutContainer>
  );
};

export default About;
