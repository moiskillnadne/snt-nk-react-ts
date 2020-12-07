import React from 'react'
import '@/templates/footer/style.less'
import { DateTime } from 'luxon'

const Footer = (): JSX.Element => (
  <footer>
    <div className="grass_background" />
    <div className="footer_info">
      <h3>Прием председателя и работа кассы: по воскресеньям в помещении Правления с 13 до 18 часов.</h3>
    </div>
    <div className="footer_meta">
      <div>
        <p>
          Copyright &copy;
          {DateTime.local().year}
          {` `}
          СНТ &quot;НИЖНЯЯ КОЛОНИЯ&quot;
        </p>
      </div>
      <div>
        <p>
          Created by
          <a href="https://www.instagram.com/moi_skill_na_dne/" target="_blank" rel="noopener noreferrer">
            @moi_skill_na_dne
          </a>
          <br />
          All Rights Reserved.
        </p>
      </div>
      <div>
        <p>Копирование любого содержимого запрещено.</p>
      </div>
    </div>
  </footer>
)

export default Footer
