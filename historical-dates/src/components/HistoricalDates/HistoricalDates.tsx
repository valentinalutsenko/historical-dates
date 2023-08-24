import React from "react";

import Slider from "../Slider/Slider";
import Title from "../Title/Title";
import FractionPagination from "../FractionPagination/FractionPagination";

import "./historicalDates.scss";

interface HistoricalDatesProps {
  db: Db;
}

type Db = {
  id: string;
  index: number;
  label: string;
  yearsInterval: {
    start: number;
    last: number;
  };
  details: {
    year: number;
    description: string;
  }[];
}[];

const HistoricalDates = ({ db }: HistoricalDatesProps) => {
  const [currentPointIndex, setcurrentPointIndex] = React.useState<number>(
    db[0].index
  );

  const [startYear, setStartYear] = React.useState<number>(
    db[0].yearsInterval.start
  );

  const sliderData = db[currentPointIndex - 1].details;
  const mobileScreen = window.innerWidth <= 786;

  return (
    <>
      <div className="historical-dates">
        <Title />
        <Slider sliderData={sliderData} mobileScreen={mobileScreen} />
      </div>
    </>
  );
};
export default HistoricalDates;
