"use client"
import { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFlip, Zoom, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";

import imgs from '@/utils/data';
import Image from 'next/image';

import Youtube from './youtube'


function Profile() {
    const sliderRef = useRef() 
    const [isMoblie, setIsMobile] = useState(false)
    useEffect(() => {
        const checkIsMobile = () => {
            if(window.innerWidth < 768) {setIsMobile(true); console.log('window.innerWidth', window.innerWidth)}
            else setIsMobile(false)
        }
        checkIsMobile()
        window.addEventListener("scroll", checkIsMobile);
      
      return () => {
        window.removeEventListener("scroll", checkIsMobile);
      }
    }, [])
    
  return (
    <div className='w-screen h-screen'>
        {/* for desktop */}
        <Swiper
        id='trendlix-swiper'
        ref={sliderRef}
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        zoom={true}
        parallax={true}
        speed='300'
        effect='flip'
        preventInteractionOnTransition={true}
        navigation={true}
        pagination={isMoblie? false
        :{
          clickable: true,
        }}
        modules={isMoblie? [[Zoom, Navigation, EffectFlip]]: [Zoom, Navigation, Pagination, EffectFlip]}
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={1}
        >
          {imgs.map((_, i)=>{
            return  <SwiperSlide key={i} className='w-full h-full bg-black'> 
              {_.url !== ''
              ?<div className="w-full h-full relative">
                <div className="absolute w-full h-full flex justify-center items-center">
                  <Youtube videoId={_.url} isMoblie={isMoblie} />
                </div> 
                <Image src={_.img} alt={_.title} 
                priority placeholder='blur' lazy="true"
                className='object-contain max-w-7xl mx-auto h-full w-full max-md:rotate-90 max-sm:scale-110 max-xs:scale-150' />
              </div>
              :<Image src={_.img} alt={_.title}
              priority placeholder='blur' lazy="true"
              className='object-contain max-w-7xl mx-auto h-full w-full max-md:rotate-90 max-sm:scale-110 max-xs:scale-150' />
              }
            </SwiperSlide> 
          })
          }
        </Swiper>
    </div>
  )
}

export default Profile