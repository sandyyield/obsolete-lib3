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
                    <img src="/page5/page5_banner.jpg" alt="" />
                </div>
                <div>
                    <img src="/page5/page5_p1.jpg" />
                </div>
                <div>
                    <img src="/page5/page5_p2_swiper.jpg" />
                </div>
                <div>
                    <img src="/page5/page5_p3.jpg" />
                </div>
                <div>
                    <img src="/page5/page5_p4.jpg" />
                </div>
                <div>
                    <img src="/page5/page5_p5.jpg" />
                </div>
                <div>
                    <img src="/page5/page5_p6_swiper.jpg" />
                </div>
            </div>
        </section>
    )
}

export { Index as Page5 }