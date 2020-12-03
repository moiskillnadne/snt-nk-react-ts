import React from 'react'

// Components
import AddForm from '@/templates/addForm/addForm'

const AddFaq = (): JSX.Element => {
  return (
    <div className="container">
      <div className="add-faq">
        <h2 className="page-title">Добавить ответ на вопрос садоводов</h2>

        <AddForm titleLabel="Введите вопрос" contentLabel="Введите ответ на вопрос" submitUrl="/api/faq/post" />
      </div>
    </div>
  )
}

export default AddFaq
