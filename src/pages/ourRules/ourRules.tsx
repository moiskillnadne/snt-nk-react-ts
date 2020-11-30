import React, { Suspense } from 'react'
import '@/pages/ourRules/style.less'

const Content = React.lazy(() => import('@/pages/ourRules/content'))

const OurRules = (): JSX.Element => {
  return (
    <div className="rules">
      <h2 className="page-title">Обязанности садовода</h2>

      <div className="rules_item rules_item_description">
        <h5>ВЫПИСКА</h5>
        <p>из Устава садоводческого некоммерческого товарищества «Нижняя Колония»</p>
        <p>Устав утвержден общим собранием членов СНТ «Нижняя Колония»</p>
        <p>29 декабря 2001 года.</p>
      </div>

      <Suspense fallback={<div>Загрузка..</div>}>
        <Content />
      </Suspense>
    </div>
  )
}

export default OurRules
