import { FC, useState } from 'react'
import { Carousel, Image } from 'antd'
import './Banner.css'

const Banner: FC = () => {
  const [mockBanner] = useState([
    {
      img: 'https://static.zongheng.com/upload/recommend/9e/e8/9ee869c453b40af77396ec97f49ffe90.jpeg',
    },
    {
      img: 'https://static.zongheng.com/upload/recommend/dc/44/dc44f9d8acb144f68c1aa5ef56c03489.jpeg',
    },
    {
      img: 'https://static.zongheng.com/upload/recommend/18/ea/18ea3314f731ce32cb798d2b7438c5c5.jpeg',
    },
  ])

  return (
    <div className="banner_wrap">
      <Carousel arrows autoplay>
        {mockBanner.map((item, index) => {
          return (
            <div className="banner_img" key={index}>
              <Image
                style={{ objectFit: 'cover' }}
                height={340}
                preview={false}
                // className="banner_img"
                src={item.img}
                alt=""
              />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Banner

// const styles  = {
//     wrap: {
//         height:  '90px',
//         backgroundColor: 'red'
//     }
// }
