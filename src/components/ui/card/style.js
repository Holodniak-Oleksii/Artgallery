import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 360px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 8px 8px 6px #f0efef, -8px -8px 6px #ffffff;
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: 290px;
  }

  @media screen and (min-width: 1025px) {
    transition: all linear 0.4s;
    &:hover {
      transform: scale(1.03);
    }
  }
`;

export const InformationBar = styled.div`
  width: 100%;
  padding: 10px 12px;
  .title {
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
  }
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .blue-btn {
    padding: 2px 16px;
    font-size: 14px;
  }
  .author {
    font-size: 14px;
    font-style: italic;
  }
`;
