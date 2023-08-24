import React from "react";

interface PointPaginationProps {
  currentPointIndex: number;
  lengthPoints: number;
  pointClickHandler: (id: number) => void;
}

const PointPagination = ({
  currentPointIndex,
  lengthPoints,
  pointClickHandler: handlePointClick,
}: PointPaginationProps) => {
  const pointsArr = [];

  for (let i = 1; i <= lengthPoints; i++) {
    pointsArr.push(
      <span
        key={`pagination-point-${i}`}
        className={`historical-dates__bullets-pagination__point${
          i === currentPointIndex &&
          "historical-dates__points-pagination__point_active"
        }`}
        onClick={() => handleBulletClick(i)}
      ></span>
    );
  }

  return <div className="historical-dates__point-pagination">{pointsArr}</div>;
};

export default PointPagination;
