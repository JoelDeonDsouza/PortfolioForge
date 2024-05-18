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
  color: #000;
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
