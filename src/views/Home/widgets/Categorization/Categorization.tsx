import { FC, useState } from 'react'
import './Categorization.css'
import { Image } from 'antd'
const Categorization: FC = () => {
  const [tipList] = useState([
    {
      logo: 'https://revo.zongheng.com/www/2024/images/4cda7fc.png',
      label: '大神专区',
    },
    {
      logo: 'https://revo.zongheng.com/www/2024/images/624b3b7.png',
      label: '排行榜',
    },
    {
      logo: 'https://revo.zongheng.com/www/2024/images/f99bbe4.png',
      label: '书库',
    },
  ])
  const [cateList] = useState([
    {
      label: '玄幻',
    },
    {
      label: '仙侠',
    },
    {
      label: '都市',
    },
    {
      label: '历史',
    },
    {
      label: '武侠',
    },
    {
      label: '奇闻轶事',
    },
    {
      label: '奇幻',
    },
    {
      label: 'N次元',
    },
    {
      label: '游戏',
    },
    {
      label: '奇幻',
    },
  ])

  const [toolsList] = useState([
    {
      label: '作者专区',
    },
    {
      label: '签约政策',
    },
    {
      label: '投稿指南',
    },
    {
      label: '完本专区',
    },
    {
      label: '漫画专区',
    },
    {
      label: '帮助中心',
    },
  ])

  return (
    <div className="cate_wrap">
      <div className="cate_left">
        {tipList &&
          tipList?.length > 0 &&
          tipList?.map?.((itm: any, idx: number) => {
            return <TipItem item={itm} key={idx}></TipItem>
          })}
      </div>
      <div className="cate_middle">
        {cateList.map((itm, idx) => {
          return <CateItem item={itm} key={idx}></CateItem>
        })}
      </div>
      <div className="cate_right">
        {toolsList.map((itm, idx) => {
          return <ToolItem item={itm} key={idx}></ToolItem>
        })}
      </div>
    </div>
  )
}

export default Categorization

interface TipItemInterface {
  logo: string
  label: string
}

interface TipPropInterface {
  item: TipItemInterface
}
const TipItem: FC<{ item: TipItemInterface }> = (props: TipPropInterface) => {
  const { item } = props
  console.log(item, 'TipItemInterface')
  return (
    <div className="tip_item">
      <div className="tip_img">
        <Image width={78} preview={false} src={item.logo}></Image>
      </div>
      <div className="tip_label">{item.label}</div>
    </div>
  )
}

const CateItem = (props) => {
  const { item } = props
  return <div className="cate_item">{item.label}</div>
}

const ToolItem = (props) => {
  const { item } = props
  return <div className="tool_item">{item.label}</div>
}
