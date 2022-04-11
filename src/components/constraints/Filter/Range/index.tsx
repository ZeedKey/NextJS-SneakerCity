import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`

`;
const InputMin = styled.input`
z-index:1;
`;
const InputMax = styled.input`
`;

export const Range = () => {
    const [min, setMin] = useState<any>(25);
    const [max, setMax] = useState<any>(75);
  return (
    <Container>
        <InputMin type="range"  min="0" max="100" value={min} onChange={(e)=>setMin(e.target.value)}/>
    </Container>
  );
};
