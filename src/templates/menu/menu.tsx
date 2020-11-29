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
    <div className={menuActive ? 'menu_wrap menu_wrap_active' : 'menu_wrap'}>
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

    const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
      navigator.userAgent,
    )
    if (isMobile) {
      setMenuActive(!menuActive)
    }
  }
}

export default Menu
