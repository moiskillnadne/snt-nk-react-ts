import React from 'react'

// Components
import Remove from '@/templates/remove/remove'

const DocumentGovernmentRemoving = (): JSX.Element => {
  return (
    <div className="container">
      <h2 className="page-title">Старница для удаления документов правления!</h2>

      <Remove type="docs-government" />
    </div>
  )
}

export default DocumentGovernmentRemoving
