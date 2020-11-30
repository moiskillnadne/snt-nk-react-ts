import React from 'react'
import '@/pages/information/style.less'

// Shared
import information from '@/constants/informationList'

const Information = (): JSX.Element => {
  return (
    <div className="information">
      <div>
        <h2 className="page-title">Полезная информация</h2>
      </div>

      <div className="information_content">
        {information.map((item, index) => {
          return (
            <div className={`information_item ${index % 4 === 0 ? 'space-padding' : null}`} key={item.title}>
              <h3>{item.title}</h3>
              <div>
                <a href={`tel:${item.mobile}`}>{item.mobile}</a>
                {item.mobile2 ? (
                  <a href={`tel:${item.mobile2}`} className="second-mobile-item">
                    {item.mobile2}
                  </a>
                ) : (
                  ''
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Information
