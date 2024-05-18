import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 100%;
  padding: 20px 0;
  @media screen and (max-width: 960px) {
    height: 50px;
  }
`;

export const HeaderText = styled.span`
  font-size: 120px;
  font-weight: bold;
  letter-spacing: 4px;
  @media screen and (max-width: 960px) {
    font-size: 30px;
  }
`;
