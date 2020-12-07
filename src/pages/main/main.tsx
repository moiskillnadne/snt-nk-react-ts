import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '@/pages/main/style.less'

// Components
import NewsItem from '@/components/itemPost/item'
import Empty from '@/components/emptyList/empty'

type ItemModel = {
  id: string
  title: string
  news: string
  date: string
}

const Main = (): JSX.Element => {
  const [news, setNews] = useState([])

  useEffect(() => {
    axios.get('/api/news/get').then((res) => setNews(res.data.content.reverse()))
  }, [])

  return (
    <div className="container">
      <div className="news_line">
        <h2 className="page-title">Актуальные новости</h2>

        <div>
          {news.length === 0 ? (
            <Empty listName="постов" />
          ) : (
            news.map((item: ItemModel) => {
              return <NewsItem id={item.id} title={item.title} content={item.news} date={item.date} key={item.id} />
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default Main
