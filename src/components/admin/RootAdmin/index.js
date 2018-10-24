import React from "react";
import "./index.scss";
import AdminHomepage from "../AdminHomepage/AdminHomepage";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "../../commmon/Header/Header";
import AsideMenu from "../../commmon/AsideMenu/AsideMenu";

const RootAdmin = () => {
  return (
    <div>
      <Header whoAreYou={"admin"} />
      <AsideMenu />
      <BrowserRouter>
        <Switch>
          <Route path="/homepage" component={AdminHomepage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default RootAdmin;
