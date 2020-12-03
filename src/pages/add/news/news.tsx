import React from 'react'

// Components
import AddForm from '@/templates/addForm/addForm'

const AddNews = (): JSX.Element => {
  return (
    <div className="container">
      <div className="add-news">
        <h2 className="page-title">Добавить новость на главную</h2>

        <AddForm
          titleLabel="Введите заголовок новости"
          contentLabel="Введите содержимое новости"
          submitUrl="/api/news/post"
        />
      </div>
    </div>
  )
}

export default AddNews
