import styled from "styled-components";
import { Header } from "..";

export const Layout: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
