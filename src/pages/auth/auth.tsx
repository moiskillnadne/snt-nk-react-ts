import './style.less'
import React, { useState } from 'react'
import history from '@/index/history'

const Auth = (): JSX.Element => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <div className="main_layout">
      <div className="content_wrapper">
        <div className="auth_title">Логин</div>
        <div className="form_container">
          <form onSubmit={onHandleSubmit} className="auth_form">
            <input
              type="email"
              name="login"
              className=""
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              className=""
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Вход</button>
          </form>
        </div>
      </div>
    </div>
  )

  function onHandleSubmit(e: React.FormEvent) {
    e.preventDefault()

    localStorage.setItem('email', email)
    localStorage.setItem('password', password)

    history.push('/')

    // eslint-disable-next-line no-restricted-globals
    location.reload()
  }
}

export default Auth
