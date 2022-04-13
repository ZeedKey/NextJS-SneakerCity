import * as React from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 0.1;
const MIN = 0;
const MAX = 1000;

interface IRangeProps {
  price: number[];
  setPrice: (arr: number[]) => void;
}

export const DualRange: React.FC<IRangeProps> = ({ price, setPrice }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        marginBottom: "2rem",
      }}
    >
      <Range
        values={price}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={false}
        onChange={(values) => setPrice(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "3px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values: price,
                  colors: ["#ccc", "black", "#ccc"],
                  min: MIN,
                  max: MAX,
                  rtl: false,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "18px",
              width: "18px",
              borderRadius: "25px",
              backgroundColor: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "30px",
                color: "black",
                fontWeight: "bold",
                fontSize: "14px",
                fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif",
                padding: "4px",
                borderRadius: "5px",
              }}
            >
              {price[index].toFixed(1)}RWF
            </div>
            <div
              style={{
                height: "16px",
                width: "5px",
                borderRadius: "25px",
              }}
            />
          </div>
        )}
      />
    </div>
  );
};
