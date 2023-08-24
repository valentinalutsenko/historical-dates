import React from "react";

interface FractionPaginationProps {
  currentPointIndex: number;
  lengthPoints: number;
}

const FractionPagination = ({
  currentPointIndex,
  lengthPoints,
}: FractionPaginationProps) => {
  return (
    <span className="historical-dates__fraction-pagination">{`0${currentPointIndex}/0${lengthPoints}`}</span>
  );
};

export default FractionPagination;
