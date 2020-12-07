import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '@/pages/faq/style.less'

// Components
import FaqItem from '@/components/itemPost/item'
import Empty from '@/components/emptyList/empty'

type FaqModel = {
  id: string
  question: string
  answer: string
  date: string
}

const Faq = (): JSX.Element => {
  const [faq, setFaq] = useState([])

  useEffect(() => {
    axios.get('/api/faq/get').then((res) => setFaq(res.data.faq.reverse()))
  }, [])

  return (
    <div className="container">
      <div className="news_line">
        <h2 className="page-title">Ответы на ваши частые вопросы</h2>
        <div>
          <p className="faq-description">
            В этом разделе будут выкладываться самые частые вопросы,
            <br />
            задаваемы на собраниях или приходящие на почту, с ответами
          </p>
        </div>
        <div>
          {faq.length === 0 ? (
            <Empty listName="ответов" />
          ) : (
            faq.map((item: FaqModel) => {
              return <FaqItem id={item.id} title={item.question} content={item.answer} date={item.date} key={item.id} />
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default Faq
