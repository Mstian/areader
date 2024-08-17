import React, { useEffect, useRef } from 'react'
import './Books.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
SwiperCore.use([Autoplay])

import 'swiper/swiper-bundle.css'

const Books: React.FC = () => {
  const swiperRef = useRef(null)

  if (swiperRef.current) {
    // 例如：使swiper自动播放
    // swiperRef?.current?.autoplay?.start()
  }

  useEffect(() => {
    // const swiper = new Swiper('.book_wrapper', {
    //   slidesPerView: 5,
    //   spaceBetween: 30,
    //   centeredSlides: true,
    //   loop: true,
    //   // pagination: {
    //   //   el: '.swiper-pagination',
    //   //   clickable: true,
    //   // },
    // })
  }, [])

  const mockData = [
    {
      img: 'https://static.zongheng.com/upload/cover/e2/7e/e27e8f8e9cb2b45ce34665ee029c33ff1720058536207.jpeg',
    },
    {
      img: 'https://static.zongheng.com/upload/cover/e2/7e/e27e8f8e9cb2b45ce34665ee029c33ff1720058536207.jpeg',
    },
    {
      img: 'https://static.zongheng.com/upload/cover/e2/7e/e27e8f8e9cb2b45ce34665ee029c33ff1720058536207.jpeg',
    },
    {
      img: 'https://static.zongheng.com/upload/cover/e2/7e/e27e8f8e9cb2b45ce34665ee029c33ff1720058536207.jpeg',
    },
    {
      img: 'https://static.zongheng.com/upload/cover/e2/7e/e27e8f8e9cb2b45ce34665ee029c33ff1720058536207.jpeg',
    },
    {
      img: 'https://static.zongheng.com/upload/cover/e2/7e/e27e8f8e9cb2b45ce34665ee029c33ff1720058536207.jpeg',
    },
    {
      img: 'https://static.zongheng.com/upload/cover/e2/7e/e27e8f8e9cb2b45ce34665ee029c33ff1720058536207.jpeg',
    },
    {
      img: 'https://static.zongheng.com/upload/cover/e2/7e/e27e8f8e9cb2b45ce34665ee029c33ff1720058536207.jpeg',
    },
    {
      img: 'https://static.zongheng.com/upload/cover/e2/7e/e27e8f8e9cb2b45ce34665ee029c33ff1720058536207.jpeg',
    },
    {
      img: 'https://static.zongheng.com/upload/cover/e2/7e/e27e8f8e9cb2b45ce34665ee029c33ff1720058536207.jpeg',
    },
    {
      img: 'https://static.zongheng.com/upload/cover/e2/7e/e27e8f8e9cb2b45ce34665ee029c33ff1720058536207.jpeg',
    },
  ]

  return (
    <div className="book_container">
      <div className="book_title">我的书架</div>
      <div className="book_wrapper">
        <Swiper
          // ref={swiperRef}
          spaceBetween={40}
          slidesPerView={7}
          centeredSlides={true}
          centeredSlidesBounds={true}
          autoplay
          loop
        >
          {mockData.map((item, index) => {
            return (
              <SwiperSlide key={index} style={{ width: '180px' }}>
                <img
                  style={{
                    width: '160px',
                    height: '220px',
                    borderRadius: '4px',
                  }}
                  src={item.img}
                  alt=""
                />
              </SwiperSlide>
            )
          })}
          {/* ...更多SwiperSlide */}
        </Swiper>
      </div>
    </div>
  )
}

export default Books
