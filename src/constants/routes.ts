const routes = [
  {
    name: 'ГЛАВНАЯ',
    link: '/',
    active: true,
    disabled: false,
    submenu: [],
  },
  {
    name: 'ИСТОРИЧЕСКАЯ СПРАВКА',
    link: '/history',
    active: false,
    disabled: false,
    submenu: [],
  },
  {
    name: 'ОРГАНЫ УПРАВЛЕНИЯ И КОНТРОЛЯ',
    link: '/managment',
    active: false,
    disabled: false,
    submenu: [],
  },
  {
    name: 'ДОКУМЕНТЫ',
    link: '/document',
    active: false,
    disabled: false,
    submenu: [
      {
        name: 'ОСНОВНЫЕ',
        link: '/document/main',
        active: false,
        disabled: false,
        submenu: [],
      },
      {
        name: 'САДОВОДСТВА',
        link: '/document/snt',
        active: false,
        disabled: false,
        submenu: [],
      },
      {
        name: 'ПРАВЛЕНИЯ',
        link: '/document/government',
        active: false,
        disabled: false,
        submenu: [],
      },
    ],
  },
  {
    name: 'НАШИ ПРАВИЛА',
    link: '/ourrules',
    active: false,
    disabled: false,
    submenu: [],
  },
  {
    name: 'КОНТАКТЫ',
    link: '/contacts',
    active: false,
    disabled: false,
    submenu: [],
  },
  {
    name: 'ИНФОРМАЦИЯ',
    link: '/information',
    active: false,
    disabled: false,
    submenu: [],
  },
  {
    name: 'ДОЛЖНИКИ',
    link: '/debtors',
    active: false,
    disabled: false,
    submenu: [],
  },
  {
    name: 'РЕКВИЗИТЫ ДЛЯ ОПЛАТЫ',
    link: '/paymentdata',
    active: false,
    disabled: false,
    submenu: [],
  },
  {
    name: 'ОТВЕТЫ НА ЧАСТЫЕ ВОПРОСЫ',
    link: '/faq',
    active: false,
    disabled: false,
    submenu: [],
  },
  {
    name: 'НАПИСАТЬ НАМ',
    link: '/feedbackform',
    active: false,
    disabled: false,
    submenu: [],
  },
]

export default routes
