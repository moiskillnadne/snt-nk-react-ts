import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '@/pages/main/style.less'

// Components
import Item from '@/pages/main/item'

type ItemModel = {
  title: string
  news: string
  date: string
}

const Main = (): JSX.Element => {
  const [news, setNews] = useState([])

  useEffect(() => {
    axios.get('/news/get').then((res) => setNews(res.data.expiredNews.reverse()))
  }, [])

  return (
    <div className="container">
      <div className="news_line">
        <h2 className="page-title">Актуальные новости</h2>

        <div>
          {news.map((item: ItemModel) => {
            return (
              <Item
                title={item.title}
                news={item.news}
                date={item.date}
                key={item.date + item.title + item.news.substr(0, 10)}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Main
