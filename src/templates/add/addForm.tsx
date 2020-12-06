/* eslint-disable no-alert */
/* eslint-disable react/jsx-props-no-spreading */
import '@/templates/add/style.less'
import React, { FC } from 'react'
import { Form, Field, FieldRenderProps } from 'react-final-form'
import axios from 'axios'
import { DateTime } from 'luxon'
import { v4 as uuidv4 } from 'uuid'
import { PostModel } from '@/types/model'

// Components
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

type AddFormProps = {
  titleLabel: string
  contentLabel: string
  submitUrl: string
}

const AddForm: FC<AddFormProps> = (props): JSX.Element => {
  const { titleLabel, contentLabel, submitUrl } = props

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let formState: any // ToDo: Присвоить тип когда выйдет Final-Form 4.21

  return (
    <div className="add-form">
      <Form
        onSubmit={submitHandler}
        subscription={{
          submitting: true,
        }}
        render={({ handleSubmit, form, submitting }) => {
          formState = form
          return (
            <form onSubmit={handleSubmit}>
              <Field component={inputAdapter} name="title" validate={required} label={titleLabel} />
              <Field component={textareaAdapter} name="content" validate={required} label={contentLabel} />
              <Field component={inputAdapter} name="secret" validate={required} label="Введите секретный код" />

              <Button type="submit" variant="outlined" color="primary" disabled={submitting}>
                Добавить
              </Button>
            </form>
          )
        }}
      />
    </div>
  )

  async function submitHandler(e: Record<string, string>) {
    const { title, content, secret } = e
    const SECRET_CODE = await getSecret()

    if (SECRET_CODE !== secret) {
      alert(`${secret} не правильный код`)
      return
    }

    // Create entity
    const body: PostModel = {
      title,
      content,
      date: DateTime.local().setZone('Europe/Moscow').toFormat('dd.MM.yyyy'),
      id: uuidv4(),
    }

    axios({
      method: 'POST',
      url: submitUrl,
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
    })
      .then(() => {
        formState.restart()
        alert('Успешно добавлено!')
      })
      .catch((err) => {
        alert(`Ошибка сервера. Новость не добавлена! ${err.status}`)
      })
  }

  async function getSecret() {
    const code = await axios.get('/api/getSecret').then((res) => res.data)
    return code
  }

  function required(value: string) {
    return value ? undefined : 'Required'
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function inputAdapter({ input, meta, ...rest }: FieldRenderProps<string, any>): JSX.Element {
    return <TextField {...input} {...rest} error={!!(meta.touched && meta.error)} />
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function textareaAdapter({ input, meta, ...rest }: FieldRenderProps<string, any>): JSX.Element {
    return (
      <TextField
        {...input}
        {...rest}
        multiline
        error={!!(meta.touched && meta.error)}
        variant="outlined"
        className="textarea"
      />
    )
  }
}

export default AddForm
