import React, { FC } from 'react'
import '@/components/itemPost/style.less'

import { PostModel } from '@/types/model'

const Item: FC<PostModel> = (props): JSX.Element => {
  const { title, content, date } = props

  return (
    <div className="item">
      <div className="inner">
        <div className="inner-title">
          <h3>{title}</h3>
        </div>
        <div className="inner-text">
          <p>{content}</p>
        </div>
        <div className="inner-date">
          <p>{date}</p>
        </div>
      </div>
    </div>
  )
}

export default Item
