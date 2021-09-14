import React, { useState, useContext } from "react";
import {
  Container,
  MobileContainer,
  IconCon,
  Icons,
  Img,
  ImgWrapper,
  TitleImg,
  Desc,
  Item,
  Title,
  Line,
  ToggleMode,
} from "./Icon_Style";
import img from "../assets/cat.png";
import { ThemeContext } from "./Context2";

const Icon = () => {
  const [mode, setMode] = useState(false);
  const [theme, setTheme] = useContext(ThemeContext);

  const dark = {
    icons: "black",
    title: "black",
    background: "white",
    shadow: "5px 5px 12px 6px rgba(0, 0, 0, 0.25)",
  };

  const light = {
    icons: "white",
    title: "white",
    background: "black",
    shadow: "5px 5px 12px 6px rgba(255, 255, 255, 0.514)",
  };

  const onChange = () => {
    setMode(!mode);
    setTheme(mode ? dark : light);
  };
  return (
    <Container color={theme.background}>
      <MobileContainer color={theme.background} shadow={theme.shadow}>
        <IconCon>
          <Icons.Arrow color={theme.icons} />
          <Icons.Switch color={theme.icons} />
        </IconCon>
        <ImgWrapper>
          <Img src={img} alt="Logo" />
          <TitleImg color={theme.title}>Sardonic Sardor</TitleImg>
          <Desc color={theme.icons}>Developper</Desc>
        </ImgWrapper>
        <Item>
          <Icons.Dark color={theme.icons} />
          <Title color={theme.icons}>Dark Mode</Title>
          <ToggleMode onChange={onChange} checked={mode} size={50} />
        </Item>
        <Item>
          <Icons.Grid />
          <Title color={theme.icons}>Story</Title>
        </Item>
        <Item>
          <Icons.UserCheck />
          <Title color={theme.icons}>Chat Head</Title>
        </Item>
        <Item>
          <Icons.UserPlus />
          <Title color={theme.icons}>Groups</Title>
        </Item>
        <Line />
        <Item>
          <Icons.PermMedia />
          <Title color={theme.icons}>Media and Photos</Title>
        </Item>
        <Item>
          <Icons.Settings2 />
          <Title color={theme.icons}>Settings and Privcy</Title>
        </Item>
        <Item>
          <Icons.MessageDots />
          <Title color={theme.icons}>Help Center</Title>
        </Item>
        <Item>
          <Icons.BellFill />
          <Title color={theme.icons}>Notification</Title>
        </Item>
      </MobileContainer>
    </Container>
  );
};

export default Icon;
