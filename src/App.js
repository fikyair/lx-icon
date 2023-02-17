import React from "react";
import styled from "styled-components";
import * as icons from "./icons";
import Header from "./components/Header";
import IconWrapper from "./components/IconWrapper";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {message, Button} from "antd";
import "antd/dist/reset.css";

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: stretch;
  align-items: stretch;
  margin: 0;
  padding: 50px;
  list-style: none;
`;

const List = () => {
  const handleCopyIcon = (text, result) => {
    if (result) {
      message.success(text);
    } else {
      message.error("fail~");
    }
  };
  return (
    <div>
      <Header />
      <Container>
        {Object.keys(icons).map((key, index) => {
          const Icon = icons[key];
          return (
            <CopyToClipboard text={`<${key} />`} onCopy={handleCopyIcon}>
              <li key={index}>
                <IconWrapper>
                  <Icon />
                  <span>{key}</span>
                </IconWrapper>
              </li>
            </CopyToClipboard>
          );
        })}
      </Container>
    </div>
  );
};

export default List;
