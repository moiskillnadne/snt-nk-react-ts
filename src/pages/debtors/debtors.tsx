import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '@/pages/debtors/style.less'

// Components
import DocumentItem from '@/components/itemDoc/item'
import Empty from '@/components/emptyList/empty'

type DocumentModel = {
  id: string
  title: string
  link: string
  date: string
}

const Debtors = (): JSX.Element => {
  const [docs, setDocs] = useState([])

  useEffect(() => {
    axios.get('/api/debtors/get').then((res) => setDocs(res.data.content.reverse()))
  }, [])

  return (
    <div className="container">
      <div className="debtors">
        <h2 className="page-title">Наши должники</h2>
        <div>
          <p className="description_debtors">
            Если у Вас возникли вопросы по списку - обращайтесь в Правление для уточнения.
          </p>
        </div>
        <div className="document-list">
          {docs.length === 0 ? (
            <Empty listName="должников" />
          ) : (
            docs.map((item: DocumentModel) => {
              return <DocumentItem id={item.id} title={item.title} link={item.link} date={item.date} key={item.id} />
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default Debtors
