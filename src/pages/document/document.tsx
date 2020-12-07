import '@/pages/document/style.less'
import React from 'react'
import { Link } from 'react-router-dom'
import routes from '@/constants/routes'

const Document = (): JSX.Element => {
  const docRoutes = routes.find((item) => item.submenu.length)

  return (
    <div className="container">
      <h2 className="page-title">Документы</h2>

      <div className="document-menu">
        {docRoutes?.submenu.map((item) => {
          return (
            <Link to={item.link} key={`${item.link}${item.name}`} className="hvr-bounce-to-right">
              {item.name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Document
