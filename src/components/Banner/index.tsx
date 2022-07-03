
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Controller, Navigation, Pagination, Scrollbar, Mousewheel, Autoplay } from 'swiper'

const Index = () => {

    const swiperProps = {
        // loop: true,
        autoplay:true

    }

    return (
        <section>
            <Swiper {...swiperProps}
            >
                <SwiperSlide><img src='/img/banner-1.png' /></SwiperSlide>
                <SwiperSlide><img src='/img/banner-2.png' /></SwiperSlide>
                <SwiperSlide><img src='/img/banner-3.png' /></SwiperSlide>

            </Swiper>
        </section>
    )
}

export { Index as Banner }