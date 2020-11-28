import React, { FC } from 'react'

type MainItemProps = {
  title: string
  news: string
  date: string
}

const Item: FC<MainItemProps> = (props): JSX.Element => {
  const { title, news, date } = props

  return (
    <div className="advert-item">
      <div className="inner-advert">
        <div className="advert-title">
          <h3>{title}</h3>
        </div>
        <div className="advert-text">
          <p>{news}</p>
        </div>
        <div className="advert-date">
          <p>{date}</p>
        </div>
      </div>
    </div>
  )
}

export default Item
