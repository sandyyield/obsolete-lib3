import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Controller, Navigation, Pagination, Scrollbar, Mousewheel, Autoplay } from 'swiper'

/* 产品研发(生产研发) */
const Index = () => {

    const swiperProps = {
        navigation: false,
        pagination: {
            dynamicBullets: true
        },
        modules: [
            Navigation,
            Pagination,
            Autoplay
        ],
        spaceBetween: 50,
        rewind: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }
    }

    return (
        <section>

            <div className='box'>
                <div>
                    <img src="/page5/banner.png" alt="" />
                </div>
                <div>
                    <div className='showBox'>
                        <Swiper {...swiperProps}>
                            <SwiperSlide>asdf</SwiperSlide>
                            <SwiperSlide>sdf</SwiperSlide>
                            <SwiperSlide>sdafds</SwiperSlide>
                            <SwiperSlide>sdafds</SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Index as Page5 }