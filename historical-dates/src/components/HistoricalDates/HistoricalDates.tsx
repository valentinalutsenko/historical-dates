import React, { MouseEvent } from "react";

import ArrowControls from "../ArrowControls/ArrowControls";
import FractionPagination from "../FractionPagination/FractionPagination";
import Slider from "../Slider/Slider";
import Title from "../Title/Title";
import TimeIntervals from "../timeIntervals";
import PointPagination from "../PointPagination/PointPagination";
import ControlsWrapper from "../ControlsWrapper/ControlsWrapper";
import capitalizeString from "../../utils/capitalizeString";

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
  const [currentPointIndex, setCurrentPointIndex] = React.useState<number>(
    db[0].index
  );

  const [startYear, setStartYear] = React.useState<number>(
    db[0].yearsInterval.start
  );

  const [lastYear, setLastYear] = React.useState<number>(
    db[0].yearsInterval.last
  );

  const [arrowControlsStatus, setArrowControlsStatus] = React.useState<
    null | "left" | "right"
  >(null);

  const [updatingYears, setUpdatingYears] = React.useState<boolean>(false);
  const pointsData = db.map(({ id, index, label }) => ({
    id,
    index,
    label: capitalizeString(label),
  }));

  const sliderData = db[currentPointIndex - 1].details;
  const rotationDuration = 1;
  const mobileScreen = window.innerWidth <= 786;

  const updateYears = (newIndex: number) => {
    setUpdatingYears(true);

    const newYearsInterval = db[newIndex - 1].yearsInterval;

    let castNumber = 1;

    if (currentPointIndex > newIndex || arrowControlsStatus === "left") {
      castNumber = -1;
    }

    let startYearCounter = Math.abs(startYear - newYearsInterval.start);
    let lastYearCounter = Math.abs(lastYear - newYearsInterval.last);
    let delay = (rotationDuration * 1000) / 2;

    if (startYearCounter > lastYearCounter) {
      delay = delay / startYearCounter;
    } else {
      delay = delay / lastYearCounter;
    }

    const interval = setInterval(() => {
      if (startYearCounter > 0) {
        setStartYear((prevYear) => prevYear + castNumber);
        startYearCounter--;
      }

      if (lastYearCounter > 0) {
        setLastYear((prevYear) => prevYear + castNumber);
        lastYearCounter--;
      }

      if (startYearCounter === 0 && lastYearCounter === 0) {
        clearInterval(interval);
        setUpdatingYears(false);
      }
    }, delay);
  };

  const handlePointClick = (index: number) => {
    if (updatingYears) {
      return;
    }

    updateYears(index);

    setCurrentPointIndex(index);
  };

  const handleControlClick = (e: MouseEvent, castNumber: number) => {
    if (
      updatingYears ||
      e.currentTarget.classList.contains(
        "arrow-controls__arrow-left_disabled"
      ) ||
      e.currentTarget.classList.contains("arrow-controls__arrow-right_disabled")
    ) {
      return;
    }

    if (mobileScreen) {
      updateYears(currentPointIndex + castNumber);
      setCurrentPointIndex((prevIndex) => prevIndex + castNumber);
    } else {
      setArrowControlsStatus(castNumber < 0 ? "left" : "right");
      setCurrentPointIndex((prevIndex) => prevIndex + castNumber);
    }
  };

  return (
    <>
      <div className="historical-dates">
        <Title />
        <TimeIntervals
          currentPointIndex={currentPointIndex}
          startYear={startYear}
          lastYear={lastYear}
          pointsData={pointsData}
          rotationDuration={rotationDuration}
          pointClickHandler={handlePointClick}
          arrowControlsStatus={arrowControlsStatus}
          arrowControlsStatusSetter={setArrowControlsStatus}
        />
        <hr className="historical-dates__delimiter" />
        <ControlsWrapper>
          <FractionPagination
            currentPointIndex={currentPointIndex}
            lengthPoints={db.length}
          />
          <ArrowControls
            controlClickHandler={handleControlClick}
            lengthPoints={db.length}
            arrowControlsStatus={arrowControlsStatus}
            currentPointIndex={currentPointIndex}
          />
        </ControlsWrapper>
        <Slider sliderData={sliderData} mobileScreen={mobileScreen} />
        <PointPagination
          currentPointIndex={currentPointIndex}
          lengthPoints={db.length}
          pointClickHandler={handlePointClick}
        />
      </div>
    </>
  );
};
export default HistoricalDates;
