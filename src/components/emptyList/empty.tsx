import React, { FC } from 'react'
import '@/components/emptyList/style.less'

type EmptyProps = {
  listName: string
}

const Empty: FC<EmptyProps> = (props): JSX.Element => {
  const { listName } = props

  return <div className="list-empty">{`Список ${listName} на данный момент пуст!`}</div>
}

export default Empty
