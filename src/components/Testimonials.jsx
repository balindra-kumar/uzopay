import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const cards = [
    {
      text: "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
      name: "Mickael Grants",
      role: "CEO",
      img: "/assets/img/testimonial1.png",
      stars: 5
    },
    {
      text: "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
      name: "David Chen",
      role: "COO",
      img: "/assets/img/testimonial2.png",
      stars: 5
    },
    {
      text: "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
      name: "Sarah Malik",
      role: "Founder",
      img: "/assets/img/testimonial1.png",
      stars: 4
    },
    {
      text: "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
      name: "Sarah Malik",
      role: "Founder",
      img: "/assets/img/testimonial2.png",
      stars: 4
    },
    {
      text: "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
      name: "Sarah Malik",
      role: "Founder",
      img: "/assets/img/testimonial1.png",
      stars: 4
    },
    {
      text: "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
      name: "Sarah Malik",
      role: "Founder",
      img: "/assets/img/testimonial1.png",
      stars: 4
    },
    {
      text: "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
      name: "Sarah Malik",
      role: "Founder",
      img: "/assets/img/testimonial2.png",
      stars: 4
    }
  ];

  return (
    <div className="testimonials-section container-fluid">
     

       <div className="gradient-border">
        <button className="label-btn  wow animate__animated animate__fadeInLeft">Client Feedbacks</button>
        {/* <button className="tag-btn">Pay Smart. Pay Fast</button> */}
        </div>
    
      <h3 className="display-5 fw-bold mt-4 text-white h1-head pb-4  wow animate__animated animate__fadeInRight">
       Trusted by<br /> Businesses Like Yours.
      </h3>

     
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        slidesPerView={3}
        spaceBetween={25}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {cards.map((c, i) => (
          <SwiperSlide key={i}>
            <div className="testimonial-card   wow animate__animated animate__fadeInDown">
              <p>{c.text}</p>
              <div className="profile">
                <div className="profile">
                  <img className="avatar" src={c.img} alt="" />
                <div>
                  <h5>{c.name}</h5>
                  <span className="text-secondary">{c.role}</span>
                </div>

                </div>
                <div className="rating">
                  {[...Array(c.stars)].map((_, i) => (
                    <img key={i} src="/assets/img/star.png" alt="star" />
                  ))}

                
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Controls at bottom center */}
      <div className="custom-controls">
        <div className="swiper-button-prev-custom wow animate__animated animate__fadeInLeft"><img src="/assets/img/prev.png" alt=""/>  </div>
        <div className="swiper-button-next-custom wow animate__animated animate__fadeInRight"><img src="/assets/img/next.png" alt=""/> </div>
      </div>
    </div>
  );
};

export default Testimonials;
