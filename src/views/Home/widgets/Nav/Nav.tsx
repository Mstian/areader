import { FC, useState, useEffect } from 'react'
import './Nav.css'
import { Input } from 'antd'
import {
  SearchOutlined,
  MessageOutlined,
  FieldTimeOutlined,
  BookOutlined,
  DollarOutlined,
} from '@ant-design/icons'
const Nav: FC = () => {
  const navItems = [
    {
      label: '首页',
    },
    {
      label: '分类',
    },
    {
      label: '排行',
    },
    {
      label: '书库',
    },
    {
      label: '完本',
    },
  ]

  const [hasBg, setHasBg] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollPos = window.pageYOffset || document.documentElement.scrollTop
      const threshold = 0 // 滚动到顶部的阈值
      if (scrollPos > threshold) {
        setHasBg(true) // 滚动超过阈值时
      } else {
        setHasBg(false) // 滚动未达到阈值时
      }
    })
  }, [])

  return (
    <div
      className="nav_bg_set"
      style={
        hasBg
          ? {
              backgroundColor: '#fff',
              boxShadow: `1px 0px 1px 1px #efefef`,
            }
          : {}
      }
    >
      <div className="nav_wrap">
        <div className="nav_left_pannel">
          <div className="nav_item_wrap">
            {navItems.map((item, index) => {
              return (
                <div key={index} className="nav_item">
                  {item.label}
                </div>
              )
            })}
          </div>

          <div className="nav_download">下载app</div>
          <div className="nav_search">
            <Input
              className="nav_search_input"
              placeholder="校花的贴身高手"
              suffix={<SearchOutlined className="nav_search_btn" />}
            />
          </div>
        </div>
        <div className="nav_right_pannel">
          <div className="nav_tips">
            <div className="nav_tip">
              <MessageOutlined />
              <span>消息</span>
            </div>
            <div className="nav_tip">
              <FieldTimeOutlined />
              <span>历史</span>
            </div>
            <div className="nav_tip">
              <BookOutlined />
              <span>书架</span>
            </div>
          </div>
          <div className="nav_getTimes">
            <DollarOutlined className="nav_getTimes_icon" />
            <span>获取时长</span>
          </div>
          <div className="nav_login_btn">登录</div>
        </div>
      </div>
    </div>
  )
}

export default Nav

// const styles  = {
//     wrap: {
//         height:  '90px',
//         backgroundColor: 'red'
//     }
// }
