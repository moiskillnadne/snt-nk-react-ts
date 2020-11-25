import React from 'react'

// Components
import Header from '@/templates/header/header'
import Footer from '@/templates/footer/footer'
import RouteManager from '@/index/router'
import Menu from '@/templates/menu/menu'

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Menu />
      <RouteManager />
      <Footer />
    </div>
  )
}

export default App
