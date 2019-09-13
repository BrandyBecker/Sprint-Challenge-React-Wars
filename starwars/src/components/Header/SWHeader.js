import React from "react";
import { Header } from "semantic-ui-react";

const SWHeader = () => {
  return (
    <>
      <Header
        className="SWHeaderThing"
        as="h1"
        block
        size="huge"
        style={{ marginTop: "1rem" }}
      >
        React Wars
      </Header>
    </>
  );
};

export default SWHeader;
