import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  padding: 4px 12px;
  border-radius: 4px;
  background-color: #191919;
  color: #f4f4f4;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const DarkButton = ({ title, onClick, type }) => {
  return <Wrapper type={type} onClick={onClick}>{title}</Wrapper>;
};

export default DarkButton;
