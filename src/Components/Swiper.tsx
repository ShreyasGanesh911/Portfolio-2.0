import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
type Props = {
    images:string[]
}
export default function SwiperMod({images}:Props) {
  return (
    <>
      <Swiper  navigation={true} modules={[Navigation]} className="w-full h-full">
            {images.map(e=>        <SwiperSlide>
            <div className='w-full h-full '><img className='w-full h-full object-contain' src={e} alt="" /></div>
        </SwiperSlide>)}
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  )
}
