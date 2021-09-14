import styled, { css } from "styled-components";
import { Settings2 } from "@styled-icons/evaicons-solid/Settings2";
import { KeyboardArrowLeft } from "@styled-icons/material-sharp/KeyboardArrowLeft";
import { Switch } from "@styled-icons/icomoon/Switch";
import { Moon } from "@styled-icons/fa-solid/Moon";
import { GridOutline } from "@styled-icons/evaicons-outline/GridOutline";
import { UserCheck } from "@styled-icons/boxicons-regular/UserCheck";
import { UserPlus } from "@styled-icons/boxicons-regular/UserPlus";
import { PermMedia } from "@styled-icons/material-twotone/PermMedia";
import { MessageDots } from "@styled-icons/boxicons-regular/MessageDots";
import { BellFill } from "@styled-icons/bootstrap/BellFill";

import Toggle from "react-dark-mode-toggle";

export const ToggleMode = styled(Toggle)`
  margin-left: auto;
  outline: none;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100wh;
  height: fit-content;
  padding: 50px 300px;
  box-sizing: border-box;
  background: ${({ color }) => color};
`;

export const MobileContainer = styled.div`
  width: 400px;
  box-sizing: border-box;
  height: 650px;
  background-color: whitesmoke;
  background: ${({ color }) => color};

  box-shadow: ${({ shadow }) => shadow};
`;

export const IconCon = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const Icons = styled.div``;

Icons.Arrow = styled(KeyboardArrowLeft)`
  color: ${({ color }) => color};
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

Icons.Switch = styled(Switch)`
  color: ${({ color }) => color};
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: auto;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 10px;
  border: 0.5px solid #000;
`;

export const TitleImg = styled.div`
  font-size: 22px;
  font-style: bold;
  font-family: SF Pro Display;
  color: ${({ color }) => color};
`;

export const Desc = styled.div`
  font-size: 15px;
  font-style: bold;
  font-family: SF Pro Display;
  color: ${({ color }) => color};
`;

export const Item = styled.div`
  display: flex;
  padding: 10px 30px;
`;

export const Title = styled.div`
  font-size: 17px;
  font-style: bold;
  font-family: SF Pro Display;
  padding-left: 10px;
  color: ${({ color }) => color};
`;

export const Line = styled.div`
  width: 85%;
  height: 1px;
  background: #e9e9e9;
  margin: 10px 30px;
  box-sizing: border-box;
`;

Icons.Dark = styled(Moon)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  color: ${({ color }) => color};
`;

Icons.Grid = styled(GridOutline)`
  width: 24px;
  height: 24px;
  color: #fbb65c;
  cursor: pointer;
`;

Icons.UserCheck = styled(UserCheck)`
  width: 27px;
  height: 27px;
  color: #ff7eb0;
  cursor: pointer;
`;

Icons.UserPlus = styled(UserPlus)`
  width: 27px;
  height: 27px;
  color: #36e3ff;
  cursor: pointer;
`;

Icons.PermMedia = styled(PermMedia)`
  width: 27px;
  height: 27px;
  color: #5476ff;
`;

Icons.Settings2 = styled(Settings2)`
  width: 27px;
  height: 27px;
  color: #5476ff;
`;

Icons.MessageDots = styled(MessageDots)`
  width: 27px;
  height: 27px;
  color: #0bc630;
`;

Icons.BellFill = styled(BellFill)`
  width: 27px;
  height: 27px;
  color: #a394c2;
`;
