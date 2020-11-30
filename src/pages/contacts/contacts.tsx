import React from 'react'
import '@/pages/contacts/style.less'

const Contacts = (): JSX.Element => {
  return (
    <div className="contacts">
      <div>
        <h2 className="page-title">НАШИ КОНТАКТЫ</h2>
      </div>

      <div className="contacts_item">
        <p>ЮРИДИЧЕСКИЙ АДРЕС СНТ «НИЖНЯЯ КОЛОНИЯ»</p>
        <p>188502, Ленинградская область, Ломоносовский район, территория СНТ Нижняя Колония улица Лесная дом 1</p>
      </div>

      <div className="contacts_item">
        <p>ПОЧТОВЫЙ АДРЕС СНТ «НИЖНЯЯ КОЛОНИЯ»</p>
        <p>188502, Ленинградская обл., Ломоносовский р-н, дер. Горбунки, почта, а/я 12</p>
      </div>

      <div className="contacts_item">
        <p>Для вопросов и пожеланий можете писать на НАШУ ЭЛЕКТРОННУЮ ПОЧТУ</p>
        <a href="mailto:nigkolsnt@yandex.ru">nigkolsnt@yandex.ru</a>
      </div>
    </div>
  )
}

export default Contacts
