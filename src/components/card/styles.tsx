import styled from "styled-components";

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
