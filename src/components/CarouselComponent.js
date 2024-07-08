// CarouselComponent.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import Presentacion from "@/src/components/Presentacion";
import Tecnologias from "@/src/components/Tecnologias";
import Experience from "@/src/components/Experience";
/* import Work from "@/src/components/Work"; */
/*import About from "@/src/components/About";
import Skills from "@/src/components/Skills";
import Testiminails from "@/src/components/Testiminails"; */
import Contact from "@/src/components/Contact";


// Register Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const CarouselComponent = () => {
  return (
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Presentacion /></SwiperSlide>
        <SwiperSlide><Tecnologias /></SwiperSlide>
        <SwiperSlide><Experience /></SwiperSlide>
        <SwiperSlide><Contact /></SwiperSlide>
         {/* <SwiperSlide><Work /></SwiperSlide> */}
        {/*
         <SwiperSlide><Skills /></SwiperSlide>
        <SwiperSlide><About /></SwiperSlide>
        <SwiperSlide><Testiminails /></SwiperSlide> 
        */}
      </Swiper>
  );
};

export default CarouselComponent;
