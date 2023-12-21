"use client"
import { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFlip, Zoom, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";

import imgs from '@/utils/data';
import Image from 'next/image';


function Gallery() {
    const sliderRef = useRef() 
    // const [isMobile, setIsMobile] = useState(false)
    // useEffect(()=>{
    //   if(window.innerWidth <= 1024){
    //     setIsMobile(true)
    //     console.log('window.innerWidth', window.innerWidth)
    //   }
    // }, [])

  return (
    <div className='w-screen h-screen'>
        
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
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination, EffectFlip]}
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={1}
        // className={isMobile? '!hidden': ''}
        >
          {imgs.map((_, i)=>{
            return  <SwiperSlide key={i} className='w-full h-full bg-black'> 
              {/* {_.url !== ''
              // ?<div className="w-full h-full relative">
              //   <div className="absolute w-full h-full flex justify-center items-center">
              //     <iframe
              //     className='-mr-[20%] max-2xl:!w-[70%] max-2xl:h-[60%] max-2xl:-mr-[15%] max-lg:!w-4/5 max-lg:mr-0'
              //     width="60%"
              //     height="70%"
              //     src={_.url}
              //     title={_.title}
              //     allowFullScreen>
              //     </iframe>
              //     <div className="bg-red-700 max-lg:!w-4/5 max-lg:-mr-[10%]"></div>
              //   </div> 
              //   <Image src={_.img} alt={_.title} 
              //   priority placeholder='blur' lazy="true"
              //   className='object-contain max-w-7xl mx-auto h-full w-full' />
              // </div>
              // : */}
              <Image src={_.img} alt={_.title}
              priority placeholder='blur' lazy="true"
              className='object-contain max-w-7xl mx-auto h-full w-full' />
              {/**/ }
            </SwiperSlide> 
          })
          }
      </Swiper>
      {/* mobile swiper */}
      <Swiper
        id='trendlix-swiper-mobile'
        // ref={sliderRef}
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
        modules={[Zoom, Navigation, EffectFlip]}
        slidesPerView={1}
        spaceBetween={1}
        direction={'vertical'}
        // className={isMobile? '': '!hidden'}
        >
          {imgs.map((_, i)=>{
            return  <SwiperSlide key={i} className='w-full h-full bg-black'> 
              {/* {_.url !== ''
              ?<div className="w-full h-full relative">
                <div className="absolute w-full h-full flex justify-center items-center">
                  <iframe
                  className='-mr-[20%] max-2xl:!w-[70%] max-2xl:h-[60%] max-2xl:-mr-[15%] max-lg:!w-4/5 max-lg:mr-0'
                  width="60%"
                  height="70%"
                  src={_.url}
                  title={_.title}
                  allowFullScreen>
                  </iframe>
                  <div className="bg-red-700 max-lg:!w-4/5 max-lg:-mr-[10%]"></div>
                </div> 
                <Image src={_.img} alt={_.title} 
                priority placeholder='blur' lazy="true"
                className='object-contain max-w-7xl mx-auto h-full w-full' />
              </div>
              : */}
              <Image src={_.img} alt={_.title}
              priority placeholder='blur' lazy="true"
              className='object-contain max-w-7xl mx-auto h-full w-full' />
              {/* } */}
            </SwiperSlide> 
          })}
      </Swiper>
    </div>
  )
}

export default Gallery