import React from 'react'
import { Link } from 'react-router-dom'
import '@/templates/menu/style.less'

// Constants
import routes from '@/constants/routes'

const Menu = (): JSX.Element => {
  return (
    <div className="menu_wrap">
      <nav className="menu">
        <ul>
          {routes.map((route) => (
            <Link to={route.link} className="menu_item">
              <li>{route.name}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Menu
