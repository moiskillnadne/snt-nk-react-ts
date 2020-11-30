/* eslint-disable no-alert */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Form, Field, FieldRenderProps } from 'react-final-form'
import '@/pages/feedbackForm/style.less'
import { DateTime } from 'luxon'
import axios from 'axios'

import { FormModel } from '@/types/model'

// Components
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const FeedbackForm = (): JSX.Element => {
  const required = (value: string) => (value ? undefined : 'Required')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let formState: any // ToDo: Присвоить тип когда выйдет Final-Form 4.21

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inputAdapter = ({ input, meta, ...rest }: FieldRenderProps<string, any>): JSX.Element => (
    <TextField {...input} {...rest} error={!!(meta.touched && meta.error)} />
  )

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const textareaAdapter = ({ input, meta, ...rest }: FieldRenderProps<string, any>): JSX.Element => (
    <TextField
      {...input}
      {...rest}
      multiline
      error={!!(meta.touched && meta.error)}
      variant="outlined"
      className="textarea"
    />
  )

  return (
    <div className="container">
      <div className="feedback-form">
        <h2 className="page-title">Форма обратной связи</h2>

        <div>
          <Form<FormModel>
            onSubmit={onSubmit}
            subscription={{
              submitting: true,
            }}
            render={({ handleSubmit, form, submitting }) => {
              formState = form
              return (
                <form onSubmit={handleSubmit}>
                  <Field component={inputAdapter} name="name" validate={required} label="Введите ФИО" />
                  <Field component={inputAdapter} name="email" validate={required} label="Введите email" />
                  <Field
                    component={textareaAdapter}
                    name="content"
                    validate={required}
                    label="Введите текст вашего письма.."
                  />

                  <Button type="submit" variant="outlined" color="primary" disabled={submitting}>
                    Отправить
                  </Button>
                </form>
              )
            }}
          />
        </div>
      </div>
    </div>
  )

  async function onSubmit(e: FormModel) {
    const EmailEntity = {
      fullname: e.name,
      email: e.email,
      comment: e.content,
      time: DateTime.local().setZone('Europe/Moscow').toFormat('dd.MM.yyyy'),
    }

    const response = await axios({
      method: 'POST',
      url: '/feedback',
      data: JSON.parse(JSON.stringify(EmailEntity)),
    })
    if (response.statusText !== 'ok') {
      alert('Ошибка! Попробуйте перезагрузить страницу')
    }

    // Cleaning form
    setTimeout(() => formState.reset())
    alert('Письмо успешно отправлено!')
  }
}

export default FeedbackForm
