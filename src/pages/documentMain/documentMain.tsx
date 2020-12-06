import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '@/pages/documentMain/style.less'

// Components
import DocumentItem from '@/components/itemDoc/item'

type DocumentModel = {
  id: string
  title: string
  link: string
  date: string
}

const DocumentMain = (): JSX.Element => {
  const [docs, setDocs] = useState([])

  useEffect(() => {
    axios.get('/api/docs/get').then((res) => setDocs(res.data.content))
  }, [])

  return (
    <div className="container">
      <div className="document">
        <div>
          <h2 className="page-title">Основные документы</h2>
        </div>
        <div className="document-list">
          {docs.map((item: DocumentModel) => {
            return <DocumentItem id={item.id} title={item.title} link={item.link} date={item.date} key={item.id} />
          })}
        </div>
      </div>
    </div>
  )
}

export default DocumentMain
