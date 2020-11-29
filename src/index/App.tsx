import React, { useState } from 'react'

// Components
import Header from '@/templates/header/header'
import Footer from '@/templates/footer/footer'
import RouteManager from '@/index/router'
import Menu from '@/templates/menu/menu'

function App(): JSX.Element {
  const [menuActive, setMenuActive] = useState(false)

  return (
    <div className="App">
      <Header menuActive={menuActive} setMenuActive={setMenuActive} />
      <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
      <RouteManager />
      <Footer />

      <div className={menuActive ? 'app-blur-on' : 'app-blur-off'} />
    </div>
  )
}

export default App
