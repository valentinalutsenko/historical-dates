import React from "react";

interface PointPaginationProps {
  currentPointIndex: number;
  lengthPoints: number;
  pointClickHandler: (id: number) => void;
}

function PointPagination({
  currentPointIndex,
  lengthPoints,
  pointClickHandler: handlePointClick,
}: PointPaginationProps) {
  const pointsArr = [];

  for (let i = 1; i <= lengthPoints; i++) {
    pointsArr.push(
      <span
        key={`pagination-bullet-${i}`}
        className={`historical-dates__bullets-pagination__bullet ${
          i === currentPointIndex &&
          "historical-dates__bullets-pagination__bullet_active"
        }`}
        onClick={() => handlePointClick(i)}
      ></span>
    );
  }

  return (
    <div className="historical-dates__bullets-pagination">{pointsArr}</div>
  );
}

export default PointPagination;
