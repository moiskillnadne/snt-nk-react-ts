import React from 'react'

// Components
import Remove from '@/templates/remove/remove'

const DocumentMainRemoving = (): JSX.Element => {
  return (
    <div className="container">
      <h2 className="page-title">Старница для удаления новостей</h2>

      <Remove type="docs" />
    </div>
  )
}

export default DocumentMainRemoving
