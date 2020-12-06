import React from 'react'

// Components
import Remove from '@/templates/remove/remove'

const DebtorsRemoving = (): JSX.Element => {
  return (
    <div className="container">
      <h2 className="page-title">Старница для удаления новостей</h2>

      <Remove type="debtors" />
    </div>
  )
}

export default DebtorsRemoving
