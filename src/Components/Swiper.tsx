import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation ,Autoplay} from 'swiper/modules';
type Props = {
    images:string[]
}
export default function SwiperMod({images}:Props) {
  return (
    <>
      <Swiper  autoplay={{delay:4500}}  modules={[Navigation,Autoplay]} className="w-full h-full">
            {images.map((e,i)=>        
            <SwiperSlide key={i}>
              <div className='w-full h-full ' ><img  className='w-full h-full object-contain' src={e} alt="" /></div>
           </SwiperSlide>)}
      </Swiper>
    </>
  )
}
