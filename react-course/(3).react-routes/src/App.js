import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import home from "./components/dashbord";
import { Portfolio, PortfolioItem } from "./components/portfolio";
import contact from "./components/contact";
import PageNotFound from "./components/pageNotFound";

function App() {
  return (
      <BrowserRouter>
      <div>
        <Navbar />
        <div className="container">
          <Switch>
          <Route path="/" component={home} exact={true} />
          <Route path="/portfolio" component={Portfolio} exact={true}/>
          <Route path="/portfolio/:id" component={PortfolioItem}/>
          <Route path="/contact" component={contact}/>
          <Route component={PageNotFound} />
        </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
