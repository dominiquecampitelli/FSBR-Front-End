import styled from "styled-components";

export const Navbar = styled.nav`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: fit-content;
  padding: 20px 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
`;

export const Logo = styled.h1`
  font-size: 25px;
  color: #1890ff;
`;

export const Card = styled.div`
  margin-top: 50%;
  width: 100%;
  padding: 20px;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  align-self: center;
  background-color: #ffffff;

  @media only screen and (min-width: 1200px) {
    margin-top: 12.5%;
    width: 25%;
    padding: 30px;
    border-radius: 15px;
  }
`;

export const HeadLine = styled.h1`
  margin-bottom: 25px;
  font-size: 16px;
  color: #0050b3;
`;
