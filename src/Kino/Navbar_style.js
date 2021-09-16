import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  width: 1440px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
  box-sizing: border-box;
  background-color: black;
  color: white;
  border-radius: 8px;
`;

export const Item = styled.div`
  font-size: 20px;
  color: white;
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
    font-size: 28px;
    color: gold;
  }
`;
