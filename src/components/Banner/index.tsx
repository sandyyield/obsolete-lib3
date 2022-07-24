
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Controller, Navigation, Pagination, Scrollbar, Mousewheel, Autoplay } from 'swiper'

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
            <Swiper {...swiperProps}
            >
                <SwiperSlide><img src='/img/banner-1.jpg' /></SwiperSlide>
                <SwiperSlide><img src='/img/banner-2.jpg' /></SwiperSlide>
                <SwiperSlide><img src='/img/banner-3.jpg' /></SwiperSlide>

            </Swiper>
        </section>
    )
}

export { Index as Banner }