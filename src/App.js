import "./App.css";
import Client from "./LayOut/Client";
import Settings from "./Pages/ClientPages/Settings/Settings";
import ConnectsHistory from "./Pages/TalentPages/Reports/ConnectsHistory/ConnectsHistory";
import BillingByClients from "./Pages/TalentPages/Reports/Billingbyclient/BillingByClients";
import WeeklySummary from "./Pages/TalentPages/Reports/WeeklySummary/WeeklySummary";
import TransactionHistory from "./Pages/TalentPages/Reports/TransactionHistory/TransactionHistory";
import MyReports from "./Pages/TalentPages/Reports/MyReports/MyReports";
import Billingpayments from "./Pages/ClientPages/Billingpayments/Billingpayments";
import BuyConnects from "./Pages/TalentPages/Reports/BuyConnects/BuyConnects";
import OverviewReports from "./Pages/TalentPages/Reports/OverviewReports/OverviewReports";
import WorkinProgress from './Components/TalentComponents/WorkinProgress/WorkinProgress';
import InReview from './Components/TalentComponents/InReviewComponent/InReview';
import Available from './Components/TalentComponents/Available/Available';
import Pending from './Components/TalentComponents/Pending/pending';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Password from "./Pages/ClientPages/Password/Password";
import Profile from "./Pages/TalentPages/Profile/Profile";
import Paymentmethods from "./Components/ClientComponents/Paymentmethods/Paymentmethod";
function App() {
  return (
    <div className="App">
      <Router>
        <switch>
          <Route path="/connectshistory" exact>
            <ConnectsHistory />
          </Route>
          <Route path="/billingbyclients" exact>
            <BillingByClients />
          </Route>
          <Route path="/transactionhistory" exact>
            <TransactionHistory />
          </Route>
          <Route path="/buyconnects" exact>
            <BuyConnects />
          </Route>
          <Route path="/myreports" exact>
            <MyReports />
          </Route>
          <Route path="/overviewreports" exact>
            <OverviewReports />
          </Route>
          <Route path="/weeklysummary" exact>
            <WeeklySummary />
          </Route>
          <Route path="/workinprogress" exact>
          <WorkinProgress />
        </Route>
        <Route path="/inreview" exact>
          <InReview />
        </Route>
        <Route path="/topending" exact>
          <Pending />
        </Route>
        <Route path="/available" exact>
          <Available />
        </Route>
        <Route path="/password" exact>
          <Password/>
        </Route>
        <Route path="/setting" exact>
          <Settings />
        </Route>
        <Route path="/profile" exact>
          <Profile/>
        </Route>
        </switch>
      </Router>
     
    </div>
  );
}

export default App;
