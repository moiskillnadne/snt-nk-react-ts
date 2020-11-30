import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '@/pages/debtors/style.less'

// Components
import Document from '@/pages/debtors/item'

type DocumentModel = {
  id: string
  title: string
  link: string
  date: string
}

const Debtors = (): JSX.Element => {
  const [docs, setDocs] = useState([])

  useEffect(() => {
    axios.get('/debtors/get').then((res) => setDocs(res.data.list))
  }, [])

  return (
    <div className="debtors">
      <div>
        <h2 className="page-title">Наши должники</h2>
      </div>
      <div>
        <p className="description_debtors">
          Если у Вас возникли вопросы по списку - обращайтесь в Правление для уточнения.
        </p>
      </div>
      <div className={`document-list ${docs.length === 0 ? 'list-empty' : ''}`}>
        {docs.length === 0 ? (
          <div>Список должников на данный момент пуст!</div>
        ) : (
          docs.map((item: DocumentModel) => {
            return <Document title={item.title} link={item.link} date={item.date} key={item.id} />
          })
        )}
      </div>
    </div>
  )
}

export default Debtors
