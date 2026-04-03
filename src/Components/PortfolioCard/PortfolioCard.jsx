import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
export default function PortfolioCard() {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={3}
        modules={[Pagination, Navigation, Autoplay]}
        loop={true}
        spaceBetween={10}
        pagination
        navigation={true}
        autoplay={{delay:1000}}
        className="bg-red-700"
      >
        <SwiperSlide>
          <div className="w-full h-100 bg-yellow-300 ">
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-100 bg-yellow-300 ">text2 here</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-100 bg-yellow-300 ">text3 here</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-100 bg-yellow-300 ">text4 here</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
