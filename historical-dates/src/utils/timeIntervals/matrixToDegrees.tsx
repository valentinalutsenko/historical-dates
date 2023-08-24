const matrixToDegrees = (matrix: string): number => {
  const values = matrix.split("(")[1].split(")")[0].split(",");
  const a = +values[0];
  const b = +values[1];

  const angle = (360 + Math.round(Math.atan2(b, a) * (180 / Math.PI))) % 360;

  return angle;
};

export default matrixToDegrees;
