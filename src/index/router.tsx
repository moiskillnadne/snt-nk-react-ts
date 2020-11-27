import React from 'react'

import { Route, Switch } from 'react-router-dom'

// Pages
import Main from '@/pages/main/main'
import History from '@/pages/history/history'
import Managment from '@/pages/managment/managment'
import DocumentMain from '@/pages/documentMain/documentMain'
import DocumentSnt from '@/pages/documentSnt/documentSnt'
import OurRules from '@/pages/ourRules/ourRules'
import Contacts from '@/pages/contacts/contacts'
import Information from '@/pages/information/information'
import PaymentData from '@/pages/paymentData/paymentData'
import Faq from '@/pages/faq/faq'
import FeedbackForm from '@/pages/feedbackForm/feedbackForm'

export default function RouteManager(): JSX.Element {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/history" component={History} />
        <Route path="/managment" component={Managment} />
        <Route path="/document/main" component={DocumentMain} />
        <Route path="/document/snt" component={DocumentSnt} />
        <Route path="/ourrules" component={OurRules} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/information" component={Information} />
        <Route path="/paymentdata" component={PaymentData} />
        <Route path="/faq" component={Faq} />
        <Route path="/feedbackform" component={FeedbackForm} />
      </Switch>
    </div>
  )
}
