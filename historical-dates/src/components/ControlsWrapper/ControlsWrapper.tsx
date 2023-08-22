import React, { ReactNode } from "react";

interface ControlsWrapper {
  children: ReactNode;
}

const ControlsWrapper = ({ children }: ControlsWrapper) => {
  return <div>{children}</div>;
};

export default ControlsWrapper;
