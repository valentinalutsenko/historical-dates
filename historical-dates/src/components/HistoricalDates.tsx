import React from "react";

import Slider from "./Slider/Slider";

interface HistoricalDatesObj {
  dataset: Dataset;
}

type Dataset = {
  id: string;
  index: number;
  label: string;
  yearsInterval: {
    satart: number;
    last: number;
  };
  details: {
    year: number;
    description: string;
  }[];
}[];

const HistoricalDates = ({ dataset }: HistoricalDatesObj) => {
  const [currentPointIndex, setcurrentPointIndex] = React.useState<number>(
    dataset[0].index
  );

  const sliderData = dataset[currentPointIndex - 1].details;
  const mobileScreen = window.innerWidth <= 786;

  return (
    <>
      <div>
        <Slider sliderData={sliderData} mobileScreen={mobileScreen} />
      </div>
    </>
  );
};
export default HistoricalDates;
