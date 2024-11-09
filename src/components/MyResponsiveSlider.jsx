import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './nswiper.css';

const MyResponsiveSlider = () => {
  return (
    <Swiper className='naraine-01'
      slidesPerView={1} // Default to 1 slide
      centeredSlides={false}
      parallax={true} // Enable parallax effect
      speed={500} // Speed of the transition
      spaceBetween={5} // Space between slides
      grabCursor={true} // Show hand cursor on drag
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      loop={true}
      // navigation={{
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // }}


      // Pagination configuration
      // pagination={{
      //   el: '.swiper-pagination',
      //   clickable: true,
      // }}

      breakpoints={{
        640: {
          slidesPerView: 1, // Show 2 slides on screens >= 640px
        },
        768: {
          slidesPerView: 3, // Show 3 slides on screens >= 768px
        },
      }}
    >
      <SwiperSlide>
        <h2 data-swiper-parallax="2000">Company 01</h2>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>

      {/* <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div> */}

      {/* Pagination bullets */}
      {/* <div className="swiper-pagination"></div> */}
    </Swiper>
  );
};

export default MyResponsiveSlider;
