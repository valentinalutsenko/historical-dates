import React, { ReactNode } from "react";

interface ControlsWrapper {
  children: ReactNode;
}

const ControlsWrapper = ({ children }: ControlsWrapper) => {
  return <div className="historical-dates__controls-wrapper">{children}</div>;
};

export default ControlsWrapper;
