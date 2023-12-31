import gsap from "gsap";

const changePointZPosition = ({
  point,
  direction,
}: {
  point: HTMLDivElement | string;
  direction: "up" | "down";
}) => {
  if (direction === "up") {
    gsap.set(point, {
      zIndex: 3,
    });
  } else {
    gsap.set(point, {
      zIndex: 2,
    });
  }
};

export default changePointZPosition;
