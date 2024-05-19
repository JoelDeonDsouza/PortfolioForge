import styled from "styled-components";

export const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  background-color: #fff;
  color: #000;
  position: relative;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: #000;
  @media screen and (max-width: 960px) {
    border-width: 2px;
    border-style: solid;
  }
`;

export const MarqueeContent = styled.div`
  display: inline-block;
  padding-left: 20px;
  animation: marquee 20s linear infinite;
  @keyframes marquee {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;

export const MarqueeText = styled.h1`
  font-size: 32px;
`;

export const HeroContainer = styled.div`
  display: flex;
  padding: 0px 10px;
  height: 750px;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 960px) {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    height: 1900px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 90%;
    margin-left: 0;
  }
`;

export const LanguageContainerJs = styled.div`
  width: 100%;
  height: 40%;
  margin-bottom: 20px;
  background-image: url(${require("../assets/language.png")});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.5;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 120%;
  }
`;

export const LanguageContainerTs = styled.div`
  width: 100%;
  height: 20%;
  margin-bottom: 20px;
  background-image: url(${require("../assets/ts.png")});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.5;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 40%;
  }
`;

export const GithubContainer = styled.a`
  width: 100%;
  height: 40%;
  background-image: url(${require("../assets/github.png")});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.5;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 50%;
    margin-bottom: 20px;
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  margin-left: 20px;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 60%;
    margin-left: 0;
  }
`;

export const AninationContent = styled.a`
  width: 100%;
  height: 30%;
  background-image: url(${require("../assets/animation.png")});
  margin-bottom: 20px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.5;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 25%;
  }
`;

export const Projects = styled.a`
  width: 100%;
  height: 100%;
  background-image: url(${require("../assets/terminal.png")});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.5;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 65%;
  }
`;

export const DisplayContainer = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  margin-left: 20px;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 100%;
    margin-left: 0;
  }
`;

export const Expo = styled.a`
  width: 100%;
  height: 100%;
  background-image: url(${require("../assets/expo.png")});
  margin-bottom: 20px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.5;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 110%;
  }
`;

export const PythonLanguage = styled.a`
  width: 100%;
  height: 60%;
  background-image: url(${require("../assets/python.png")});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.5;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 40%;
    margin-bottom: 20px;
  }
`;

export const Node = styled.a`
  width: 100%;
  height: 80%;
  background-image: url(${require("../assets/node.png")});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.5;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 60%;
  }
`;
