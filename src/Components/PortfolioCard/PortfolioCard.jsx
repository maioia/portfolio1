import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { projects } from "../../Data.jsx";

import { useLocation } from "react-router";
export default function PortfolioCard() {
  const location = useLocation();
  const category = location.pathname.split("/").pop();

  const filterProjects =
    category === "featured"
      ? projects
      : projects.filter((p) => p.category === category);

  return (
    <div className="w-full">
      <Swiper
        key={category}
        modules={[Pagination, Navigation, Autoplay]}
        loop={true}
        spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 1, // 📱 mobile
          },
          640: {
            slidesPerView: 1, // small tablets
          },
          768: {
            slidesPerView: 2, // tablets
          },
          1024: {
            slidesPerView: 3, // laptops
          },
          1280: {
            slidesPerView: 2, // large screens
          },
        }}
        pagination
        navigation={true}
        autoplay={{ delay: 1000 }}
        className=""
      >
        {filterProjects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="p-4 border border-gray-300 space-y-5 rounded-lg">
              <h3>{project.title}</h3>
              <img
                src={project.imgUrl}
                alt={project.title}
                className="w-full h-48 object-cover mb-2"
              />
              <p>{project.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
