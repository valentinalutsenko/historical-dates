import gsap from "gsap";

const hidePointLabel = (label: HTMLElement | string) => {
  gsap.set(label, {
    opacity: 0,
  });
};

export default hidePointLabel;
