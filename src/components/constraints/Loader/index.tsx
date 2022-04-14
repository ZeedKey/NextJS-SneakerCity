import styled from "styled-components";
import Image from "next/image";

const Box = styled.div`
  @keyframes rotation {
    0% {
      transform: rotate(2turn);
    }
  }

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  transition: all 5s;

  img {
    animation: 10s rotation;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;

export const Loader = () => {
  return (
    <Box>
      <Image src="/loader.svg" width="105" height="105" alt="loader" />
    </Box>
  );
};
