import { Range, getTrackBackground } from "react-range";
import styled from "styled-components";
const STEP = 0.1;
const MIN = 0;
const MAX = 1000;

const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;
const StyledRange = styled(Range)`
  height: 36px;
  display: flex;
  width: 100%;
`;
const Track = styled.div`
  height: 36px;
  display: flex;
  width: 100%;
`;
const Line = styled.div`
  height: 3px;
  width: 100%;
  border-radius: 4px;
  align-self: center;
`;
const Thumb = styled.div`
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 6px #aaa;
`;
const Price = styled.div`
  position: absolute;
  top: 30px;
  color: black;
  font-weight: bold;
  font-size: 14px;
  padding: 4px;
  border-radius: 5px;
`;
const Ball = styled.div`
  height: 16px;
  width: 5px;
  border-radius: 25px;
`;

interface IRangeProps {
  price: number[];
  setPrice: (arr: number[]) => void;
}

export const DualRange: React.FC<IRangeProps> = ({ price, setPrice }) => {
  return (
    <Box>
      <StyledRange
        values={price}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={false}
        onChange={(values) => setPrice(values)}
        renderTrack={({ props, children }) => (
          <Track
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
            }}
          >
            <Line
              ref={props.ref}
              style={{
                background: getTrackBackground({
                  values: price,
                  colors: ["#ccc", "black", "#ccc"],
                  min: MIN,
                  max: MAX,
                  rtl: false,
                }),
              }}
            >
              {children}
            </Line>
          </Track>
        )}
        renderThumb={({ index, props }) => (
          <Thumb
            {...props}
            style={{
              ...props.style,
            }}
          >
            <Price>{price[index].toFixed(1)}RWF</Price>
            <Ball />
          </Thumb>
        )}
      />
    </Box>
  );
};
