import React, { FC, ReactNode } from "react";
import { Header } from "../Header";
import styled from "styled-components";

const PadBox = styled.div`
  padding: 1.75rem 3.938rem;
`;

export const Layout: FC<ReactNode> = ({ children }) => {
  return (
    <>
      <Header />
      <PadBox>{children}</PadBox>
    </>
  );
};
