import React from "react";

import Slider from "./Slider/Slider";
import Title from "./Title/Title";
import FractionPagination from "./FractionPagination/FractionPagination";

interface HistoricalDatesProps {
  dataset: Dataset;
}

type Dataset = {
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

const HistoricalDates = ({ dataset }: HistoricalDatesProps) => {
  const [currentPointIndex, setcurrentPointIndex] = React.useState<number>(
    dataset[0].index
  );

  const [startYear, setStartYear] = React.useState<number>(
    dataset[0].yearsInterval.start
  );

  const sliderData = dataset[currentPointIndex - 1].details;
  const mobileScreen = window.innerWidth <= 786;

  return (
    <>
      <div>
        <Title />
        <Slider sliderData={sliderData} mobileScreen={mobileScreen} />
      </div>
    </>
  );
};
export default HistoricalDates;
