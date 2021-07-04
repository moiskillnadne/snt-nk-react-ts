import React, { useState } from 'react'

import Header from '@/templates/header/header'
import Footer from '@/templates/footer/footer'
import RouteManager from '@/index/router'
import Menu from '@/templates/menu/menu'

const Base = (): JSX.Element => {
  const [menuActive, setMenuActive] = useState(false)

  return (
    <div className="App">
      <Header menuActive={menuActive} setMenuActive={setMenuActive} />
      <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
      <RouteManager />
      <Footer />

      <div className={`app-blur ${menuActive ? 'blur' : 'noblur'}`} />
    </div>
  )
}

export default Base
