"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import TitleSection from "@/Components/TitleSection";
import Image from "next/image";
import criterias from "@/data/criterias";
const Gallery = () => {
  return (
    <section>
      <TitleSection title="freelancers category" />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        className="mySwiper my-14"
      >
        {criterias.map((criteria) => (
          <SwiperSlide key={criteria.id}>
            <Image width={500} height={400} src={criteria.image} alt=""></Image>
            <h2 className="md:text-2xl font-semibold text-center mt-5">
              {criteria.title}
            </h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
