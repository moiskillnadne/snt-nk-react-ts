import React, { FC } from 'react'
import '@/components/ItemRemove/style.less'

type RemoveItemProps = {
  title: string
  date: string
  id: string
  onRemoveClick: (id: string) => void
}

const RemoveItem: FC<RemoveItemProps> = (props): JSX.Element => {
  const { title, id, date, onRemoveClick } = props

  return (
    <div className="item-doc">
      <div className="inner-doc">
        <div className="inner-doc-title">
          <h3>{title}</h3>
        </div>
        <div className="inner-doc-button">
          <button type="button" onClick={() => onRemoveClick(id)}>
            Удалить
          </button>
        </div>
        <div className="inner-doc-date">
          <p>{date}</p>
        </div>
      </div>
    </div>
  )
}

export default RemoveItem
