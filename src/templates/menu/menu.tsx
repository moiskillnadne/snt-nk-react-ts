import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import '@/templates/menu/style.less'

// Constants
import routes from '@/constants/routes'

type MenuProps = {
  menuActive: boolean
  setMenuActive: (menuActive: boolean) => void
}

const Menu: FC<MenuProps> = (props): JSX.Element => {
  const { menuActive, setMenuActive } = props
  const [, forceRender] = useState({})

  return (
    <div className={`menu_wrap ${menuActive ? 'menu_wrap_active' : ''}`}>
      <nav className="menu">
        {routes.map((route) => {
          const { pathname } = window.location
          return (
            <Link
              key={`${route.name}${route.link}`}
              to={route.link}
              className={`menu_item ${pathname === route.link ? 'menu_item_active' : ''}`}
              onClick={() => switchActive(route.name)}
            >
              <h4>{route.name}</h4>
            </Link>
          )
        })}
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

    const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
      navigator.userAgent,
    )

    if (isMobile) {
      window.document.body.classList.remove('noscroll')
      setMenuActive(!menuActive)
    }

    forceRender({})
  }
}

export default Menu
