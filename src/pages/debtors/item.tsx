import React, { FC } from 'react'

type DocumentProps = {
  title: string
  link: string
  date: string
}

const Document: FC<DocumentProps> = (props) => {
  const { title, link, date } = props

  return (
    <div className="document-file-link-block">
      <div>
        <h4 className="document-file">{title}</h4>
      </div>

      <div className="wrap-document-link">
        <a href={link} target="_blank" rel="noopener noreferrer" className="document-link">
          Посмотреть документ
        </a>
      </div>

      <div className="date-stamp">{date}</div>
    </div>
  )
}

export default Document
