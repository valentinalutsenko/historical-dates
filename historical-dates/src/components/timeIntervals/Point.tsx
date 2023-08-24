import React, { RefObject } from "react";

interface PointProps {
  index: number;
  label: string;
  prevPointRef?: RefObject<HTMLDivElement>;
  prevPointNumberRef?: RefObject<HTMLSpanElement>;
  pointClickHandler: (id: number) => void;
}

const Point = ({
  index,
  label,
  prevPointRef,
  prevPointNumberRef,
  pointClickHandler: handleBulletClick,
}: PointProps) => {
  return (
    <div className={`time-intervals__point point${index}`} ref={prevPointRef}>
      <span
        className="point-number"
        ref={prevPointNumberRef}
        onClick={() => handleBulletClick(index)}
      >
        {index}
      </span>
      <span className="point-label">{label}</span>
    </div>
  );
};

export default Point;
