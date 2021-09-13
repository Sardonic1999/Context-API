import React, { useContext } from "react";
import { Container, Item } from "./Navbar_Style";
import { Kino } from "./Context";

const Navbar = () => {
  const [data, setData] = useContext(Kino);
  return (
    <Container>
      <Item>MovieList</Item>
      <Item>{data.length}</Item>
    </Container>
  );
};

export default Navbar;
