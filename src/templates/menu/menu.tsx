import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '@/templates/menu/style.less'

// Constants
import routes from '@/constants/routes'

const Menu = (): JSX.Element => {
  const [, forceRender] = useState({})

  return (
    <div className="menu_wrap">
      <nav className="menu">
        {routes.map((route) => (
          <Link
            key={`${route.name}${route.link}`}
            to={route.link}
            className={route.active ? 'menu_item menu_item_active' : 'menu_item'}
            onClick={() => switchActive(route.name)}
          >
            <h4>{route.name}</h4>
          </Link>
        ))}
      </nav>
    </div>
  )

  function switchActive(name: string) {
    const currentActiveIndex = routes.findIndex((item) => item.active === true)
    const nextActiveIndex = routes.findIndex((item) => item.name === name)

    // Search ACTIVE item in menu
    routes[currentActiveIndex].active = false
    // Search onCLICK item menu
    routes[nextActiveIndex].active = true
    forceRender({})
  }
}

export default Menu
