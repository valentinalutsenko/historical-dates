import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import styles from "./slider.module.scss";

interface SliderProps {
  sliderData: slideData[];
  mobileScreen: boolean;
}

interface slideData {
  year: number;
  description: string;
}

const Slider = ({ sliderData, mobileScreen }: SliderProps) => {
  return (
    <>
      <div className={styles.wrapper}>
        <Swiper
          slidesPerView={2}
          freeMode={true}
          grabCursor={false}
          navigation={{
            prevEl: styles.prev,
            nextEl: styles.next,
          }}
          modules={[Pagination, Navigation]}
          className={styles.swiper}
        >
          {sliderData.map((item: slideData) => {
            return (
              <SwiperSlide key={item.year}>
                <div className={styles.title}>{item.year}</div>
                <div className={styles.description}>{item.description}</div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button className={styles.prev}></button>
        <button className={styles.next}></button>
      </div>
      <div className={styles.pagination}></div>
    </>
  );
};

export default Slider;
