/* eslint-disable no-alert */
import '@/templates/remove/style.less'
import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'
import { PostModel } from '@/types/model'

type RemoveProps = {
  type: 'news' | 'docs' | 'extra-docs' | 'debtors'
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
            <div className="item-for-removing" key={item.id}>
              <div className="item-for-removing-data">
                <div>
                  <h3>{item.title}</h3>
                </div>
                <div>
                  <p>{item.date}</p>
                </div>
              </div>
              <button type="button" onClick={() => onHandleClick(item.id)}>
                Удалить новость
              </button>
            </div>
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
