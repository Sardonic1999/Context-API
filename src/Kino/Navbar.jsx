import React, { useContext } from "react";
import { Container, Item } from "./Navbar_style";
import { PhotoContext } from "./Store";

const Navbar = ({ list }) => {
  const [rasm] = useContext(PhotoContext);
  return (
    <Container>
      <Item>Logo</Item>
      <Item>Logo</Item>
      <Item>Logo</Item>
      <Item>Logo</Item>
      <Item>
        All Movies: <span>{rasm?.length || 0}</span>
      </Item>
    </Container>
  );
};

export default Navbar;
