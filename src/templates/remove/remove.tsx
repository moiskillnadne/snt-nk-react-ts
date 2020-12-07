/* eslint-disable no-alert */
import '@/templates/remove/style.less'
import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'
import { PostModel } from '@/types/model'

// Components
import RemoveItem from '@/components/ItemRemove/item'

type RemoveProps = {
  type: 'news' | 'docs' | 'extra-docs' | 'debtors' | 'docs-government'
}

const Remove: FC<RemoveProps> = (props): JSX.Element => {
  const { type } = props
  const [news, setNews] = useState([])

  useEffect(fetchingData, [])

  return (
    <div className="news_line">
      <div>
        {news.map((item: PostModel) => {
          return (
            <RemoveItem id={item.id} title={item.title} date={item.date} key={item.id} onRemoveClick={onHandleClick} />
          )
        })}
      </div>
    </div>
  )

  function onHandleClick(id: string) {
    news.reverse().forEach((element: PostModel, index) => {
      if (element.id !== id) return
      axios({
        method: 'post',
        url: `/api/${type}/delete`,
        data: {
          index,
          id: element.id,
        },
      })
        .then(() => {
          fetchingData()
          alert('Новость была успешно удалена!')
        })
        .catch(() => alert('Ошибка сервера. Не удалось удалить файл!'))
    })
  }

  function fetchingData() {
    axios.get(`/api/${type}/get`).then((res) => setNews(res.data.content.reverse()))
  }
}

export default Remove
