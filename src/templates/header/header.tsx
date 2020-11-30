import React, { FC } from 'react'
import '@/templates/header/style.less'

type HeaderProps = {
  menuActive: boolean
  setMenuActive: (menuActive: boolean) => void
}

const Header: FC<HeaderProps> = (props): JSX.Element => {
  const { menuActive, setMenuActive } = props

  return (
    <header>
      <div className="grass_background" />
      <div className="title">
        <h4>садоводческое некоммерческое товарищество</h4>
        <h1>НИЖНЯЯ КОЛОНИЯ</h1>
      </div>

      <button
        type="button"
        className={`menu_burger  ${menuActive ? 'activeStatus' : ''}`}
        onClick={() => setMenuActive(!menuActive)}
      >
        <span />
      </button>
    </header>
  )
}

export default Header
