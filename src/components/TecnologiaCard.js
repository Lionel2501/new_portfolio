// CarouselComponent.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Register Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]);

const TecnologiaCard = () => {
    
    return (
        <Swiper
            /* style={{ overflow: 'visible'}} */
            direction='vertical'
            className="blog-slider blog-slider__wrp swiper-wrapper"
            spaceBetween={30}
            fadeEffect
            loop={true}
            pagination={{
                clickable: true,
                el: '.blog-slider__pagination'
            }}      
            modules={[Pagination, Navigation, Mousewheel]}
        >
            <SwiperSlide className='blog-slider__item swiper-slide' style={{ display: 'flex', overflow: 'visible'}}>
                <div className="blog-slider__img">
                    <img src="/img/arte_y_parte.png" alt="" />
                </div>
                <div className="blog-slider__content">
                    <span className="blog-slider__code">26 December 2019</span>
                    <div className="blog-slider__title">Lorem Ipsum Dolor</div>
                    <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
                    <KeyboardArrowDownIcon className='tecnologia_arrow_down' fontSize='large'/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='blog-slider__item swiper-slide' style={{ display: 'flex'}}>
                <div className="blog-slider__img">
                    <img src="/img/arte_y_parte.png" alt="" />
                </div>
                <div className="blog-slider__content">
                    <span className="blog-slider__code">26 December 2019</span>
                    <div className="blog-slider__title">Lorem Ipsum Dolor2</div>
                    <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
                    <KeyboardArrowDownIcon className='tecnologia_arrow_down' fontSize='large'/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='blog-slider__item swiper-slide' style={{ display: 'flex'}}>
                <div className="blog-slider__img">
                    <img src="/img/arte_y_parte.png" alt="" />
                </div>
                <div className="blog-slider__content">
                    <span className="blog-slider__code">26 December 2019</span>
                    <div className="blog-slider__title">Lorem Ipsum Dolor</div>
                    <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
                    <KeyboardArrowDownIcon className='tecnologia_arrow_down' fontSize='large'/>
                </div>
            </SwiperSlide>
            <div className="blog-slider__pagination"></div>
    </Swiper>
        
    );
};

export default TecnologiaCard;