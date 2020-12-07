import React from 'react'

import { Route, Switch } from 'react-router-dom'

// Pages
import Main from '@/pages/main/main'
import History from '@/pages/history/history'
import Managment from '@/pages/managment/managment'
import Document from '@/pages/document/document'
import DocumentMain from '@/pages/document/main/main'
import DocumentSnt from '@/pages/document/snt/snt'
import DocumentGovernment from '@/pages/document/government/government'
import OurRules from '@/pages/ourRules/ourRules'
import Contacts from '@/pages/contacts/contacts'
import Information from '@/pages/information/information'
import Debtors from '@/pages/debtors/debtors'
import PaymentData from '@/pages/paymentData/paymentData'
import Faq from '@/pages/faq/faq'
import FeedbackForm from '@/pages/feedbackForm/feedbackForm'

// Content manager
import AddNews from '@/pages/add/news/news'
import AddDocumentMain from '@/pages/add/documentMain/documentMain'
import AddDocumentSnt from '@/pages/add/documentSnt/documentSnt'
import AddDocumentGovernment from '@/pages/add/documentGovernment/documentGovernment'
import AddDebtors from '@/pages/add/debtors/debtors'
import AddFaq from '@/pages/add/faq/faq'

import NewsRemoving from '@/pages/remove/news/news'
import DocumentMainRemoving from '@/pages/remove/documentMain/documentMain'
import DocumentSntRemoving from '@/pages/remove/documentSnt/documentSnt'
import DocumentGovernmentRemoving from '@/pages/remove/documentGovernment/documentGovernment'
import DebtorsRemoving from '@/pages/remove/debtors/debtors'

export default function RouteManager(): JSX.Element {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/history" component={History} />
        <Route path="/managment" component={Managment} />

        <Route path="/document/main" component={DocumentMain} />
        <Route path="/document/snt" component={DocumentSnt} />
        <Route path="/document/government" component={DocumentGovernment} />
        <Route path="/document" component={Document} />

        <Route path="/ourrules" component={OurRules} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/information" component={Information} />
        <Route path="/debtors" component={Debtors} />
        <Route path="/paymentdata" component={PaymentData} />
        <Route path="/faq" component={Faq} />
        <Route path="/feedbackform" component={FeedbackForm} />

        {/* For adding data to website */}
        <Route path="/add/news" component={AddNews} />
        <Route path="/add/docs" component={AddDocumentMain} />
        <Route path="/add/extradocs" component={AddDocumentSnt} />
        <Route path="/add/gov-docs" component={AddDocumentGovernment} />
        <Route path="/add/faq" component={AddFaq} />
        <Route path="/add/debtors" component={AddDebtors} />

        {/* For removing data from website */}
        <Route path="/remove/news" component={NewsRemoving} />
        <Route path="/remove/docs" component={DocumentMainRemoving} />
        <Route path="/remove/extradocs" component={DocumentSntRemoving} />
        <Route path="/remove/gov-docs" component={DocumentGovernmentRemoving} />
        <Route path="/remove/debtors" component={DebtorsRemoving} />
      </Switch>
    </div>
  )
}
