import styled from "styled-components";

export const Card = styled.div`
  width: 40%;
  margin-top: 15%;
  padding: 25px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-self: center;
  background-color: #ffffff;
`;

export const HeadLine = styled.div`
  width: 100%;
  margin-bottom: 25px;
  gap: 15px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Logo = styled.h1`
  font-size: 25px;
  color: #1890ff;
`;

export const CreateAccount = styled.a`
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  color: #0050b3;
`;
