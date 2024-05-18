import React from "react";
// styles //
import { MarqueeContainer, MarqueeContent, MarqueeText } from "./styles";

const Marquee = () => {
  return (
    <MarqueeContainer>
      <MarqueeContent>
        <MarqueeText>
          Every great developer you know got there by solving problems they were
          unqualified to solve until they actually did it.
        </MarqueeText>
      </MarqueeContent>
    </MarqueeContainer>
  );
};

export default Marquee;
