import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 8px 20px;
  border-radius: 100px;
  ${(props) =>
    props.outline
      ? `
        border: 1px solid rgba(164, 55, 219, 1) ;
        color: rgba(32, 129, 226, 1);
      `
      : `
        background: linear-gradient(90deg,rgba(164, 55, 219, 1) 0%,rgba(32, 129, 226, 1) 100%);
        color: #fff;
      `}
  font-size: 18px;
  line-height: 22px;
  font-weight: 300;
  @media screen and (min-width: 1024px) {
    transition: all 0.4s ease-in;
    &:hover {
      ${(props) =>
        props.outline
          ? `
            border: 1px solid rgba(164, 55, 219, 1) ;
            background-color: rgba(188, 97, 233, 0.1);
          `
          : `
          background: linear-gradient(90deg,rgba(178, 93, 221, 1) 0%,rgba(62, 146, 231, 1) 100%);
        `}
    }
  }
`;

const BlueButton = ({ title, onClick, type, children, outline }) => {
  return (
    <Button
      title={title || "button"}
      outline={outline}
      onClick={onClick}
      type={type || "button"}
    >
      {children}
    </Button>
  );
};

export default BlueButton;
