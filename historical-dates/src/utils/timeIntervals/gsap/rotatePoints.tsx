import gsap from "gsap";
import hidePoint from "./hidePoint";
import hidePointLabel from "./hidePointLabel";
import matrixToDegrees from "../matrixToDegrees";
import changePointZPosition from "./changePointZPosition";

const rotatePoints = ({
  chosenPosition,
  activePointNumber,
  prevPoint,
  prevPointNumber,
  points,
  pointsQuantity,
  duration = 1,
}: {
  chosenPosition: number;
  activePointNumber: HTMLElement;
  prevPoint: HTMLDivElement;
  prevPointNumber: HTMLElement;
  points: NodeListOf<Element>;
  pointsQuantity: number;
  duration?: number;
}) => {
  let rotationDegrees;
  // задаём направление вращения точки
  // short - кратчайший путь
  let pointRotationDirection = "short";
  let numberRotationDirection;

  //Задаем угол повора и напрвление вращения точки
  // cw - по часовой стрелке
  // cww - против часовой стрелки
  if (chosenPosition < 180) {
    rotationDegrees = 30 - chosenPosition;
    numberRotationDirection = "cw";
  } else {
    rotationDegrees = 390 - chosenPosition;
    numberRotationDirection = "ccw";
  }

  // задаём явное указание направления
  if (chosenPosition === 210) {
    pointRotationDirection = "cw";
  }

  gsap.set(activePointNumber, {
    cursor: "auto",
  });

  hidePoint({
    point: prevPoint,
    pointNumber: prevPointNumber,
  });
  hidePointLabel(prevPoint.querySelector(".point-label") as HTMLElement);

  for (let i = 0; i < pointsQuantity; i++) {
    const point = points[i] as HTMLDivElement;
    const pointNumber = point.querySelector(".point-number");
    const position = matrixToDegrees(window.getComputedStyle(point).transform);

    const newPosition = (position + rotationDegrees) % 360;

    changePointZPosition({
      point: point,
      direction: "down",
    });
    gsap.to(point, {
      duration: duration,
      rotate: `${newPosition}_${pointRotationDirection}`,
      ease: "power1.out",
    });
    gsap.to(pointNumber, {
      duration: duration,
      rotate: `${-newPosition}_${numberRotationDirection}`,
      pointerEvents: "none",
    });
  }

  gsap.set(".point-number", {
    delay: duration,
    clearProps: "pointerEvents",
  });
};

export default rotatePoints;
