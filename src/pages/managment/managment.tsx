import React from 'react'
import '@/pages/managment/style.less'

const Managment = (): JSX.Element => {
  return (
    <div className="control">
      <h2 className="page-title">Состав Правления СНТ &quot;Нижняя Колония&quot;</h2>

      <div className="control_item">
        <h3>Председатель СНТ</h3>
        <p>Батурин Владимир Валентинович</p>
        <a href="tel:8-(921)-953-29-95">8-(921)-953-29-95</a>
      </div>

      <div className="control_item">
        <h3>Члены правления</h3>
        <p>Новикова Е.В.</p>
        <p>Салий О.С.</p>
        <p>Ивахова А.Л.</p>
        <p>Крайнова Е.Р.</p>
        <p>Маслов А.Л.</p>
      </div>

      <div className="control_item">
        <h3>Председатель ревизионной комиссии</h3>
        <p>Мейрамов Игорь Витальевич</p>
        <a href="tel:+7-(921)-636-10-65">+7-(921)-636-10-65</a>
      </div>

      <div className="control_item">
        <h3>Бухгалтер</h3>
        <p>Соколова Галина Николаевна</p>
      </div>

      <div className="control_item">
        <h3>КПП</h3>
        <a href="tel:8-(921)-970-02-97">8-(921)-970-02-97</a>
      </div>
    </div>
  )
}

export default Managment
