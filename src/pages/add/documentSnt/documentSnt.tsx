import React from 'react'

// Components
import AddForm from '@/templates/addForm/addForm'

const AddDocumentSnt = (): JSX.Element => {
  return (
    <div className="container">
      <div className="add-docs">
        <h2 className="page-title">Добавить документ в раздел &quot;Документы СНТ&quot;</h2>

        <AddForm
          titleLabel="Введите название документа"
          contentLabel="Введите ссылку на документ"
          submitUrl="/api/extra-docs/post"
        />
      </div>
    </div>
  )
}

export default AddDocumentSnt
