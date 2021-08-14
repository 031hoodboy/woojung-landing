import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Greet from './Pages/About/Greet';
import BusinessPartner from './Pages/About/BusinessPartner';
import Vision from './Pages/About/Vision';
import WayToCome from './Pages/About/WayToCome';
import OrganizeChart from './Pages/About/OrganizeChart';
import License from './Pages/BusinessDomain/License';
import Contact from './Pages/FacilityStatus/MailContact';
import Recruitment from './Pages/CustomerSupport/Recruitment';
import QuoteContact from './Pages/CustomerSupport/QuoteContact';
import ManagementAgency from "./Pages/BusinessDomain/ManagementAgency"
import Integration from "./Pages/BusinessDomain/Integration"
import Inspection from "./Pages/BusinessDomain/Inspection"
import Corporation from "./Pages/BusinessDomain/Corporation"
import Notice from "./Pages/Community/Notice"
import NoticeInfo from "./Pages/Community/NoticeInfo"

import AutomotiveParts from "./Pages/BusinessDomain/AutomotiveParts"
import ScrollTop from './components/PageTop';

// import Fee2 from './pages/Fee/Fee2';

const App = () => {
  return (
    <BrowserRouter>
    <ScrollTop/>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/greet" component={Greet}  />
        <Route path="/vision" component={Vision}  />
        <Route path="/business-partner" component={BusinessPartner}  />
        <Route path="/way-to-come" component={WayToCome}  />
        <Route path="/organize-chart" component={OrganizeChart}  />
        <Route path="/license" component={License}  />
        <Route path="/management-agency" component={ManagementAgency}  />
        <Route path="/inspection" component={Inspection}  />
        <Route path="/corporation" component={Corporation}  />
        <Route path="/automotive-parts" component={AutomotiveParts}  />
        <Route path="/integration" component={Integration}  />
        <Route path="/contact" component={Contact}  />
        <Route path="/recruitment" component={Recruitment}  />
        <Route path="/quote-contact" component={QuoteContact}  />
        <Route path="/notice" component={Notice}  />
        <Route path="/notice-info" component={NoticeInfo}  />

      </Switch>
    </BrowserRouter>
  )
}

export default App;
