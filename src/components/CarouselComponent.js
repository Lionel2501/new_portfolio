import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import Presentacion from "@/src/components/Presentacion";
import Tecnologias from "@/src/components/Tecnologias";
import TecnologiasDetail from "@/src/components/TecnologiasDetail";
import Experience from "@/src/components/Experience";
import Contact from "@/src/components/Contact";
import { useTranslation } from 'react-i18next';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]);

const CarouselComponent = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={false}
        touchRatio={0.5} 
        touchAngle={75} 
        direction='vertical'
        mousewheel={{ invert: false }}
        className="mySwiper"
      >
        <SwiperSlide><Presentacion t={t}/></SwiperSlide>
        <SwiperSlide><Tecnologias t={t}/></SwiperSlide>
        <SwiperSlide><Experience t={t}/></SwiperSlide>
        <SwiperSlide><Contact t={t}/></SwiperSlide>
      </Swiper>
    </>
  );
};

export default CarouselComponent;
