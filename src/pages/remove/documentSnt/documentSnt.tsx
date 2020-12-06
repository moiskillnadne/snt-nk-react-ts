import React from 'react'

// Components
import Remove from '@/templates/remove/remove'

const DocumentSntRemoving = (): JSX.Element => {
  return (
    <div className="container">
      <h2 className="page-title">Старница для удаления документов СНТ</h2>

      <Remove type="extra-docs" />
    </div>
  )
}

export default DocumentSntRemoving
