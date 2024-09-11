// CarouselComponent.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Register Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]);

const TecnologiaCard = () => {
    
    return (
        <Swiper
            /* style={{ overflow: 'visible'}} */
            /* direction='vertical' */
            /* className="blog-slider blog-slider__wrp swiper-wrapper" */
            className="mySwiper blog-slider blog-slider__wrp swiper-wrapper"
            spaceBetween={30}
            fadeEffect
            loop={false}
            pagination={{
                clickable: true,
                /* el: '.blog-slider__pagination' */
            }}      
            modules={[Pagination, Navigation, Mousewheel]}
        >
            <SwiperSlide style={{ display: 'flex' }}>
                <div className="blog-slider__img">
                    <img src="/img/php_logo.png" alt="" />
                </div>
                <div className="blog-slider__content">
                    {/* <KeyboardArrowUpIcon className='tecnologia_arrow_down' fontSize='large'/> */}
                    <span className="blog-slider__code">PHP</span>
                    <div className="blog-slider__title">Lorem Ipsum Dolor</div>
                    <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
                    {/* <KeyboardArrowDownIcon className='tecnologia_arrow_down' fontSize='large'/> */}
                </div>
            </SwiperSlide>
            <SwiperSlide style={{ display: 'flex'}}>
                <div className="blog-slider__img">
                    <img src="/img/js_logo.png" alt="" />
                </div>
                <div className="blog-slider__content">
                    {/* <KeyboardArrowUpIcon className='tecnologia_arrow_down' fontSize='large'/> */}
                    <span className="blog-slider__code">Javascript</span>
                    <div className="blog-slider__title">Lorem Ipsum Dolor2</div>
                    <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
                    {/* <KeyboardArrowDownIcon className='tecnologia_arrow_down' fontSize='large'/> */}
                </div>
            </SwiperSlide>
            <SwiperSlide style={{ display: 'flex'}}>
                <div className="blog-slider__img">
                    <img src="/img/laravel_logo.png" alt="" />
                </div>
                <div className="blog-slider__content">
                    {/* <KeyboardArrowUpIcon className='tecnologia_arrow_down' fontSize='large'/> */}
                    <span className="blog-slider__code">Laravel</span>
                    <div className="blog-slider__title">Lorem Ipsum Dolor</div>
                    <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
                    {/* <KeyboardArrowDownIcon className='tecnologia_arrow_down' fontSize='large'/> */}
                </div>
            </SwiperSlide>
            <SwiperSlide style={{ display: 'flex'}}>
                <div className="blog-slider__img">
                    <img src="/img/react_logo.png" alt="" />
                </div>
                <div className="blog-slider__content">
                    {/* <KeyboardArrowUpIcon className='tecnologia_arrow_down' fontSize='large'/> */}
                    <span className="blog-slider__code">React</span>
                    <div className="blog-slider__title">Lorem Ipsum Dolor</div>
                    <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
                    {/* <KeyboardArrowDownIcon className='tecnologia_arrow_down' fontSize='large'/> */}
                </div>
            </SwiperSlide>
            <SwiperSlide style={{ display: 'flex'}}>
                <div className="blog-slider__img">
                    <img src="/img/mysql_logo.png" alt="" />
                </div>
                <div className="blog-slider__content">
                    {/* <KeyboardArrowUpIcon className='tecnologia_arrow_down' fontSize='large'/> */}
                    <span className="blog-slider__code">My Sql</span>
                    <div className="blog-slider__title">Lorem Ipsum Dolor</div>
                    <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
                    {/* <KeyboardArrowDownIcon className='tecnologia_arrow_down' fontSize='large'/> */}
                </div>
            </SwiperSlide>
            <SwiperSlide style={{ display: 'flex'}}>
                <div className="blog-slider__img">
                    <img src="/img/mongo_db_logo.png" alt="" />
                </div>
                <div className="blog-slider__content">
                    {/* <KeyboardArrowUpIcon className='tecnologia_arrow_down' fontSize='large'/> */}
                    <span className="blog-slider__code">Mongo DB</span>
                    <div className="blog-slider__title">Lorem Ipsum Dolor</div>
                    <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
                    {/* <KeyboardArrowDownIcon className='tecnologia_arrow_down' fontSize='large'/> */}
                </div>
            </SwiperSlide>
            <SwiperSlide style={{ display: 'flex'}}>
                <div className="blog-slider__img">
                    <img src="/img/github_logo_.png" alt="" />
                </div>
                <div className="blog-slider__content">
                    {/* <KeyboardArrowUpIcon className='tecnologia_arrow_down' fontSize='large'/> */}
                    <span className="blog-slider__code">Git Hub</span>
                    <div className="blog-slider__title">Lorem Ipsum Dolor</div>
                    <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
                    {/* <KeyboardArrowDownIcon className='tecnologia_arrow_down' fontSize='large'/> */}
                </div>
            </SwiperSlide>
            <SwiperSlide style={{ display: 'flex'}}>
                <div className="blog-slider__img">
                    <img src="/img/html_logo.png" alt="" />
                </div>
                <div className="blog-slider__content">
                    {/* <KeyboardArrowUpIcon className='tecnologia_arrow_down' fontSize='large'/> */}
                    <span className="blog-slider__code">HTML</span>
                    <div className="blog-slider__title">Lorem Ipsum Dolor</div>
                    <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
                    {/* <KeyboardArrowDownIcon className='tecnologia_arrow_down' fontSize='large'/> */}
                </div>
            </SwiperSlide>
            <SwiperSlide style={{ display: 'flex'}}>
                <div className="blog-slider__img">
                    <img src="/img/css_logo.png" alt="" />
                </div>
                <div className="blog-slider__content">
                    {/* <KeyboardArrowUpIcon className='tecnologia_arrow_down' fontSize='large'/> */}
                    <span className="blog-slider__code">CSS</span>
                    <div className="blog-slider__title">Lorem Ipsum Dolor</div>
                    <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
                    {/* <KeyboardArrowDownIcon className='tecnologia_arrow_down' fontSize='large'/> */}
                </div>
            </SwiperSlide>
            <div className="blog-slider__pagination"></div>
    </Swiper>
        
    );
};

export default TecnologiaCard;