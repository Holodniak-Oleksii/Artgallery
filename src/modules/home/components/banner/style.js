import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 20px;
  justify-content: space-between;
  align-items: flex-start;
  height: fit-content;
  .video-container {
    width: 58%;
  }
`;
export const Content = styled.div`
  width: 40%;
  padding-top: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 24px;
  .blue-btn {
    svg {
      transform: rotate(180deg);
    }
  }
`;
