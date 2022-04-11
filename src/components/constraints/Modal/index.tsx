import styled from "styled-components";

const Box = styled.div`
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.04);
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
`;
const ImageBlock = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
`;
const AsideBlock = styled.div`
  background: white;
  height: 100vh;
`;

export const Modal: React.FC = () => {
  return (
    <Box>
      <Grid>
        <ImageBlock>1</ImageBlock>
        <AsideBlock>1</AsideBlock>
      </Grid>
    </Box>
  );
};
