import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const TripCoursal = () => {
  const slides = [
    { src: "/images/coursal1.jpg", title: "Adventure" },
    { src: "/images/coursal2.jpg", title: "Mountains" },
    { src: "/images/coursal3.jpg", title: "Beaches" },
    { src: "/images/coursal4.jpg", title: "City Tours" },
    { src: "/images/coursal5.jpg", title: "Deserts" },
    { src: "/images/coursal6.jpg", title: "Nature" },
  ];

  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h1
          className="display-5 fw-bold"
          style={{ color: "rgba(28, 83, 77, 1)" }}
        >
          Our Trips
        </h1>
        <p className="text-muted fs-5">
          Explore our unforgettable travel moments
        </p>
      </div>

      {/* Carousel */}
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="trip-card">
              <img src={slide.src} alt={slide.title} />
              <div className="trip-overlay">
                <h5>{slide.title}</h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Styles */}
      <style>
        {`
          .trip-card {
            position: relative;
            overflow: hidden;
            border-radius: 16px;
            height: 230px;
            cursor: pointer;
          }

          .trip-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s ease;
          }

          .trip-card:hover img {
            transform: scale(1.1);
          }

          .trip-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              to top,
              rgba(0,0,0,0.7),
              rgba(0,0,0,0.1)
            );
            display: flex;
            align-items: flex-end;
            padding: 15px;
            opacity: 0;
            transition: opacity 0.4s ease;
          }

          .trip-card:hover .trip-overlay {
            opacity: 1;
          }

          .trip-overlay h5 {
            color: #fff;
            margin: 0;
            font-weight: 600;
          }
        `}
      </style>

    </div>
  );
};

export default TripCoursal;
