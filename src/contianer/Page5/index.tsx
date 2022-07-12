import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import 'swiper/swiper-bundle.css';
import {
  Controller,
  Navigation,
  Pagination,
  Scrollbar,
  Mousewheel,
  Autoplay,
} from "swiper";

/* 产品研发(生产研发) */
const Index = () => {
  const swiperProps = {
    navigation: true,
    pagination: {
      dynamicBullets: false,
      el: ".swiper-pagination",
    },
    modules: [Navigation, Pagination, Autoplay],
    spaceBetween: 100,
    rewind: false,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    slidesPerView: 2,
    loop: true,
  };

  const swiper3imgs = [
    "/page5/swiper3/s1.png",
    "/page5/swiper3/s2.png",
    "/page5/swiper3/s3.png",
    "/page5/swiper3/s4.png",
  ];

  const swiper1imgs = [
    "/page5/swiper1/s1.png",
    "/page5/swiper1/s2.png",
    "/page5/swiper1/s3.png",
    "/page5/swiper1/s4.png",
    "/page5/swiper1/s5.png",
    "/page5/swiper1/s6.png",
    "/page5/swiper1/s7.png",
    "/page5/swiper1/s8.png",
  ];

  const swiperStyle = {
    width: "70%",
    marginLeft: "15%",
  };

  return (
    <section>
      <div className="box">
        <div>
          <img src="/page5/page5_banner.jpg" alt="" />
        </div>
        <div>
          <img src="/page5/page5_p1.jpg" />
        </div>
        <div>
          <div className="s1" style={{ width: "86%", marginLeft: "7%" }}>
            <Swiper
              {...{
                ...swiperProps,
                slidesPerView: 6,
                spaceBetween: 20,
                navigation: false,
              }}
            >
              {swiper1imgs.map((i) => (
                <SwiperSlide>
                  <img src={i} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination"></div>
          </div>

          {/* <div style={{height:'5vw'}}></div> */}
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
          <div className="s3" style={swiperStyle}>
            <Swiper {...swiperProps}>
              {swiper3imgs.map((i) => (
                <SwiperSlide>
                  <img src={i} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination"></div>
          </div>
        </div>
        <div style={{ height: "200px" }}></div>
      </div>
    </section>
  );
};

export { Index as Page5 };
