import React from 'react'

// Components
import AddForm from '@/templates/add/addForm'

const AddDocumentGovernment = (): JSX.Element => {
  return (
    <div className="container">
      <div className="add-docs">
        <h2 className="page-title">Добавить документ в раздел &quot;Документы правления&quot;</h2>

        <AddForm
          titleLabel="Введите название документа"
          contentLabel="Введите ссылку на документ"
          submitUrl="/api/docs-government/post"
        />
      </div>
    </div>
  )
}

export default AddDocumentGovernment
