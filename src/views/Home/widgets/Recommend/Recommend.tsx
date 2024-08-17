import { FC, useState } from 'react'
import './Recommend.css'
const Recommend: FC = () => {
  const mock_data = [
    {
      img: 'https://static.zongheng.com/upload/cover/83/ce/83ce3b8c8baa24dd265fd27ffa59b2bb1719626521801.jpeg',
      title: '透视眼不用来赚钱，还能干嘛',
      desc: '获得透视眼后，我是地球最牛富二代',
      author: '封禅子 · 都市',
    },
    {
      img: 'https://static.zongheng.com/upload/cover/83/ce/83ce3b8c8baa24dd265fd27ffa59b2bb1719626521801.jpeg',
      title: '透视眼不用来赚钱，还能干嘛',
      desc: '获得透视眼后，我是地球最牛富二代',
      author: '封禅子 · 都市',
    },
    {
      img: 'https://static.zongheng.com/upload/cover/83/ce/83ce3b8c8baa24dd265fd27ffa59b2bb1719626521801.jpeg',
      title: '透视眼不用来赚钱，还能干嘛',
      desc: '获得透视眼后，我是地球最牛富二代',
      author: '封禅子 · 都市',
    },
    {
      img: 'https://static.zongheng.com/upload/cover/83/ce/83ce3b8c8baa24dd265fd27ffa59b2bb1719626521801.jpeg',
      title: '透视眼不用来赚钱，还能干嘛',
      desc: '获得透视眼后，我是地球最牛富二代',
      author: '封禅子 · 都市',
    },
    {
      img: 'https://static.zongheng.com/upload/cover/83/ce/83ce3b8c8baa24dd265fd27ffa59b2bb1719626521801.jpeg',
      title: '透视眼不用来赚钱，还能干嘛',
      desc: '获得透视眼后，我是地球最牛富二代',
      author: '封禅子 · 都市',
    },
    {
      img: 'https://static.zongheng.com/upload/cover/83/ce/83ce3b8c8baa24dd265fd27ffa59b2bb1719626521801.jpeg',
      title: '透视眼不用来赚钱，还能干嘛',
      desc: '获得透视眼后，我是地球最牛富二代',
      author: '封禅子 · 都市',
    },
  ]

  const randList = [
    {
      idx: '01',
      img: 'https://static.zongheng.com/upload/s_image/cover/d4/df/d4df1d817b749e66bd4c60bc609b929d1709689763499.jpeg',
      title: '星武纪元',
      author: '醉卧九重云',
      piao: '11017 月票',
    },
    {
      idx: '02',
      img: 'https://static.zongheng.com/upload/s_image/cover/d4/df/d4df1d817b749e66bd4c60bc609b929d1709689763499.jpeg',
      title: '星武纪元',
      author: '醉卧九重云',
      piao: '11017 月票',
    },
    {
      idx: '03',
      img: 'https://static.zongheng.com/upload/s_image/cover/d4/df/d4df1d817b749e66bd4c60bc609b929d1709689763499.jpeg',
      title: '星武纪元',
      author: '醉卧九重云',
      piao: '11017 月票',
    },
    {
      idx: '04',
      img: 'https://static.zongheng.com/upload/s_image/cover/d4/df/d4df1d817b749e66bd4c60bc609b929d1709689763499.jpeg',
      title: '星武纪元',
      author: '醉卧九重云',
      piao: '11017 月票',
    },
    {
      idx: '05',
      img: 'https://static.zongheng.com/upload/s_image/cover/d4/df/d4df1d817b749e66bd4c60bc609b929d1709689763499.jpeg',
      title: '星武纪元',
      author: '醉卧九重云',
      piao: '11017 月票',
    },
    {
      idx: '06',
      img: 'https://static.zongheng.com/upload/s_image/cover/d4/df/d4df1d817b749e66bd4c60bc609b929d1709689763499.jpeg',
      title: '星武纪元',
      author: '醉卧九重云',
      piao: '11017 月票',
    },
    {
      idx: '07',
      img: 'https://static.zongheng.com/upload/s_image/cover/d4/df/d4df1d817b749e66bd4c60bc609b929d1709689763499.jpeg',
      title: '星武纪元',
      author: '醉卧九重云',
      piao: '11017 月票',
    },
    {
      idx: '08',
      img: 'https://static.zongheng.com/upload/s_image/cover/d4/df/d4df1d817b749e66bd4c60bc609b929d1709689763499.jpeg',
      title: '星武纪元',
      author: '醉卧九重云',
      piao: '11017 月票',
    },
    {
      idx: '09',
      img: 'https://static.zongheng.com/upload/s_image/cover/d4/df/d4df1d817b749e66bd4c60bc609b929d1709689763499.jpeg',
      title: '星武纪元',
      author: '醉卧九重云',
      piao: '11017 月票',
    },
    {
      idx: '10',
      img: 'https://static.zongheng.com/upload/s_image/cover/d4/df/d4df1d817b749e66bd4c60bc609b929d1709689763499.jpeg',
      title: '星武纪元',
      author: '醉卧九重云',
      piao: '11017 月票',
    },
  ]

  const [hoverIndex, setHoverIndex] = useState(0)

  return (
    <div className="re_wrapper">
      <div className="re_left">
        <div className="re_left_title">主编力荐</div>
        <div className="re_card_wrap">
          <div className="re_firstCard">
            <div className="re_fst_card_img_div">
              <img
                className="re_fst_card_img"
                src="https://static.zongheng.com/upload/cover/e2/7e/e27e8f8e9cb2b45ce34665ee029c33ff1720058536207.jpeg"
                alt=""
              />
            </div>

            <div className="re_card_book_title">
              大国工业：你一个民营企业搞航母？
            </div>
            <div className="re_card_book_author">开心薯片</div>
            <div className="re_card_book_desc">从破产小厂到科技巅峰</div>
            <div className="re_card_abs_bg"></div>
          </div>
          <div className="re_cardList">
            {mock_data.map((item, index) => {
              return (
                <div className="re_card_item" key={index}>
                  <img className="re_card_item_left" src={item.img} alt="" />
                  <div className="re_card_item_right">
                    <div className="re_card_item_r_title">{item.title}</div>
                    <div className="re_card_item_r_desc">{item.desc}</div>
                    <div className="re_card_item_r_author">{item.author}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="re_right">
        <div className="re_right_title">Top10月票榜</div>
        <div className="re_r_content_list">
          {randList.map((item, index) => {
            return (
              <div
                className="re_r_content_item"
                key={index}
                style={
                  index == randList.length - 1
                    ? {
                        marginBottom: 0,
                      }
                    : {}
                }
                onMouseEnter={() => {
                  setHoverIndex(index)
                }}
              >
                <div className="re_r_c_itm_index">{item.idx}</div>
                <div>
                  <div className="re_r_con_itm_title">{item.title}</div>
                  {index == hoverIndex && (
                    <div>
                      <div className="re_r_con_itm_author">{item.author}</div>
                      <div className="re_r_con_piao">{item.piao}</div>
                    </div>
                  )}
                </div>
                {index == hoverIndex && (
                  <div
                    className="re_r_con_itm_img_div"
                    style={
                      hoverIndex == 0
                        ? {
                            width: '72px',
                            height: '96px',
                            top: '-40px',
                          }
                        : {}
                    }
                  >
                    <img className="re_r_con_itm_img" src={item.img} alt="" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Recommend
