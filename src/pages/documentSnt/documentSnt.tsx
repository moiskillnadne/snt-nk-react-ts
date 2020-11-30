import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '@/pages/documentSnt/style.less'

// Components
import DocumentItem from '@/components/itemDoc/item'

type DocumentModel = {
  id: string
  title: string
  link: string
  date: string
}

const DocumentSnt = (): JSX.Element => {
  const [extraDocs, setExtraDocs] = useState([])

  useEffect(() => {
    axios.get('/extra-docs/get').then((res) => setExtraDocs(res.data.list))
  }, [])

  return (
    <div className="document">
      <div>
        <h2 className="page-title">Документы садоводства</h2>
      </div>
      <div className="document-list">
        {extraDocs.map((item: DocumentModel) => {
          return <DocumentItem id={item.id} title={item.title} link={item.link} date={item.date} key={item.id} />
        })}
      </div>
    </div>
  )
}

export default DocumentSnt
