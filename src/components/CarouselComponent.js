// CarouselComponent.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import Presentacion from "@/src/components/Presentacion";
import Tecnologias from "@/src/components/Tecnologias";
import TecnologiasDetail from "@/src/components/TecnologiasDetail";
import Experience from "@/src/components/Experience";
import Contact from "@/src/components/Contact";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]);

const CarouselComponent = () => {

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={false}
/*         pagination={{
          clickable: true,
        }} */
        direction='vertical'
        /* navigation={true} */
        mousewheel={{ invert: false }}
        /* modules={[Pagination, Navigation, Mousewheel]} */
        className="mySwiper"
      >
        <SwiperSlide><Presentacion /></SwiperSlide>
        <SwiperSlide><Tecnologias /></SwiperSlide>
        <SwiperSlide><TecnologiasDetail /></SwiperSlide>
        <SwiperSlide><Experience /></SwiperSlide>
        <SwiperSlide><Contact /></SwiperSlide>
      </Swiper>
    </>
  );
};

export default CarouselComponent;
