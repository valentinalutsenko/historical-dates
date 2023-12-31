import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

interface SliderProps {
  sliderData: slideData[];
  mobileScreen: boolean;
}

interface slideData {
  year: number;
  description: string;
}
//карточки с фактами
const Slider = ({ sliderData, mobileScreen }: SliderProps) => {
  return (
    <>
      <div className="swiper__wrapper">
        <Swiper
          slidesPerView={mobileScreen ? 2 : 3}
          freeMode={mobileScreen ? true : false}
          grabCursor={mobileScreen ? false : true}
          navigation={{
            prevEl: ".swiper__button-prev",
            nextEl: ".swiper__button-next",
          }}
          modules={[Pagination, Navigation]}
          className=".swiper"
        >
          {sliderData.map((item: slideData) => {
            return (
              <SwiperSlide key={item.year}>
                <div className="swiper-slide__title">{item.year}</div>
                <div className="swiper-slide__description">
                  {item.description}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button className="swiper__button-prev"></button>
        <button className="swiper__button-next"></button>
      </div>
      <div className="swiper__pagination"></div>
    </>
  );
};

export default Slider;
