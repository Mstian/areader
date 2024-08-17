import { FC } from 'react'
import Nav from './widgets/Nav/Nav'
import Banner from './widgets/Banner/Banner'
import Categorization from './widgets/Categorization/Categorization'
import Recommend from './widgets/Recommend/Recommend'

import Books from './widgets/Books/Books'

import './index.css'
const Home: FC = () => {
  // useEffect(() => {
  //   document.addEventListener(
  //     'wheel',
  //     function (event) {
  //       // 阻止默认的滚动行为
  //       event.preventDefault()
  //     },
  //     { passive: false }
  //   ) // 注意：passive 设置为 false 以允许调用 preventDefault
  // }, [])

  return (
    <div className="container">
      <Nav></Nav>
      <Banner></Banner>
      <div
        style={{
          marginTop: '338px',
          position: 'relative',
          zIndex: 2,
          backgroundColor: '#f6f8fa',
        }}
      >
        <Categorization></Categorization>
        <Recommend></Recommend>

        <Books></Books>
      </div>
    </div>
  )
}

export default Home
