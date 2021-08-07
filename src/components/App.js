import React, { useEffect } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "./Header";
import DashBoard from "./DashBoard";
import Landing from "./Landing";
import { fetchUser } from "../actions";
import Surveynew from "./SurveyNew";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div className="container">
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={DashBoard} />
          <Route exact path="/surveys/new" component={Surveynew} />
        </div>
      </Router>
    </div>
  );
};
export default App;
