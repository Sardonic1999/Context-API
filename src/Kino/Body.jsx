import React, { useContext } from "react";
import { Container, Card, Rasm } from "./Body_style";
import { data as D } from "./mock";

import { PhotoContext } from "./Store";

export const Body = () => {
  const [data, setData] = useContext(PhotoContext);
  if (data.length === 0) return <h1>loading...</h1>;
  return (
    <Container>
      <button onClick={() => setData(D)}>ChangeA</button>
      {data.map(({ id, url, title }) => {
        return (
          <Card key={id}>
            <h6 style={{ margin: "0px" }}>{title}</h6>
            <Rasm src={url} alt="" />
          </Card>
        );
      })}
    </Container>
  );
};

export default Body;
