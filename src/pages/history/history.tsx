import React, { Suspense } from 'react'
import '@/pages/history/style.less'

// Components
const Story = React.lazy(() => import('@/pages/history/content'))

const History = (): JSX.Element => {
  return (
    <div className="container">
      <div className="history">
        <div>
          <h2 className="page-title">История нашего садоводства</h2>
        </div>

        <div className="history-video">
          <iframe
            title="youtube-video"
            width="640"
            height="360"
            src="https://www.youtube.com/embed/Q7nP-dkgLAg"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <Suspense fallback={<div>Загрузка..</div>}>
          <Story />
        </Suspense>
      </div>
    </div>
  )
}

export default History
