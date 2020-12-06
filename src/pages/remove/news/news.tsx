import React from 'react'

// Components
import Remove from '@/templates/remove/remove'

const NewsRemoving = (): JSX.Element => {
  return (
    <div className="container">
      <h2 className="page-title">Старница для удаления новостей</h2>

      <Remove type="news" />
    </div>
  )
}

export default NewsRemoving
