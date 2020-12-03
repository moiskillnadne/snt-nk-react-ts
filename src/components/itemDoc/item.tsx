import React, { FC } from 'react'
import '@/components/itemDoc/style.less'

import { DocModel } from '@/types/model'

const Document: FC<DocModel> = (props): JSX.Element => {
  const { title, link, date } = props

  return (
    <div className="item-doc">
      <div className="inner-doc">
        <div className="inner-doc-title">
          <h3>{title}</h3>
        </div>
        <div className="inner-doc-button">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {window.screen.availWidth < 450 ? 'Посмотреть' : 'Посмотреть документ'}
          </a>
        </div>
        <div className="inner-doc-date">
          <p>{date}</p>
        </div>
      </div>
    </div>
  )
}

export default Document
