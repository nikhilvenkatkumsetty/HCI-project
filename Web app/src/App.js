import React, {useState,useEffect} from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Drift from "react-driftjs";

import HomeComponent from "./components/home-component/HomeComponent";
import AdsComponent from "./components/solution-component/ads-component/AdsComponent";
import BfsiComponent from "./components/solution-component/bfsi-component/BfsiComponent";
import GovComponent from "./components/solution-component/gov-component/GovComponent";
import MediaComponent from "./components/solution-component/media-component/MediaComponent";
import RetailComponent from "./components/solution-component/retail-component/RetailComponent";
import TravelComponent from "./components/solution-component/travel-component/TravelComponent";
// Demo 
import Demo from "./components/demo/Demo"
// import ModulesDemo from "./components/demo/ModulesDemo"
// import Supermarket from "./components/insight-component/Supermarket"
// import FootBall from "./components/insight-component/FootBall"
// import Expenditure from "./components/insight-component/Expenditure"
// import SocialMedia from "./components/insight-component/SocialMedia"
// import Electronics from "./components/insight-component/Electronics"
// import Resident from "./components/insight-component/Resident"
// import Brand from "./components/insight-component/BrandMain"
// import Sector from "./components/insight-component/SectorMain"
// import QtrVolume from "./components/insight-component/QtrVolume"
// import HindiNews from "./components/insight-component/HindiNews"
// import EnglishNews from "./components/insight-component/EnglishNewsMain"
// import Regional from "./components/insight-component/RegionalMain";
// import CovidMain from "./components/insight-component/CovidMain";
// import Iosmain from "./components/insight-component/Ios"
// // insight
// import InsightDrop1 from "./components/insight-component/InsightDrop1"
// import Restaurants from "./components/insight-component/Restaurants"
// import Topapps from "./components/insight-component/Topapps"
// import Advertiser from "./components/insight-component/Advertisers"
//reatil
import Report from "./components/report/Report";
//Blog
import Blog from "./components/blog/Blog";
//privacy-policy
import Privarcy from "./components/Privacy-Policy/PrivacyHome";
import Terms from "./components/Terms-conditions/TermsHome";
// common components
import Header from "./common-components/Header/Header";
import Footer from "./common-components/Footer/Footer";
import "./App.css";

export const customHistory = createBrowserHistory();

function App() {
  const [open, setopen] = useState(false);

  return (
    <Router history={customHistory}>
    <Drift
  appId="g2itx3x3khki"
  attributes={{ email: "kumsettynikhilvenkat.181it224@nitk.edu.in", company: "airrecog.in" }}
/>
      <Header setopen={setopen} open={open}/>
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route exact path="/ads" component={AdsComponent} />
        <Route exact path="/bfsi" component={BfsiComponent} />
        <Route exact path="/gov" component={GovComponent} />
        <Route exact path="/media" component={MediaComponent} />
        <Route exact path="/retail" component={RetailComponent} />
        <Route exact path="/travel" component={TravelComponent} />
        <Route exact exact path="/demo" component={Demo} />
       {/* <Route path="/modules_demo" component={ModulesDemo} />
        <Route path="/insight/statistics/retail_chart1" component={Restaurants} />
        <Route path="/insight/statistics/retail_chart2" component={Supermarket} />
        <Route path="/insight/statistics/retail_chart3" component={FootBall} />
        <Route path="/insight/statistics/retail_chart6" component={Expenditure} />
        <Route path="/insight/statistics/retail_chart5" component={SocialMedia}/>
        <Route path="/insight/statistics/retail_chart4" component={Electronics}/>
        <Route path="/insight/statistics/media_chart1" component={Topapps}/>
        <Route path="/insight/statistics/media_chart2" component={Iosmain}/>
        <Route path="/insight/statistics/media_chart3" component={HindiNews}/>
        <Route path="/insight/statistics/media_chart4" component={EnglishNews}/>
        <Route path="/insight/statistics/media_chart5" component={Regional}/> */}
        {/* <Route path="/insight/statistics/media_chart6" component={CovidMain}/>
        <Route path="/insight/statistics/advertising_chart1" component={Advertiser}/>
        <Route path="/insight/statistics/advertising_chart2" component={Resident}/>
        <Route path="/insight/statistics/advertising_chart3" component={Brand}/>
        <Route path="/insight/statistics/advertising_chart4" component={Sector}/>
        <Route path="/insight/statistics/advertising_chart5" component={QtrVolume}/>

        <Route path="/insight/statistics" component={InsightDrop1} />
        <Route exact path="/insight/reports" component={Report}/>
        <Route path="/insight/blogs" component={Blog}/>
        <Route path="/insight/mediumpage" component={() => {window.location.href = 'https://medium.com/datalytix-in'; return null;}}/> */}
        <Route path="/Privacy-Policy" component={Privarcy}/>
        <Route path="/Terms-Conditions" component={Terms}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
