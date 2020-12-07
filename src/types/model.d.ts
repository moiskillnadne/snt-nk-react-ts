export type PostModel = {
  id: string
  title: string
  content: string
  date: string
}

export type DocModel = {
  id: string
  title: string
  link: string
  date: string
}

export type FormModel = {
  name: string
  email: string
  content: string
}

export type RouteModel = {
  name: string
  link: string
  active: boolean
  disabled: boolean
  submenu: [] | RouteModel[]
}
