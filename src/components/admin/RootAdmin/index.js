import React from "react";
import "./index.scss";
import AdminHomepage from "../AdminHomepage/AdminHomepage";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AsideMenu from "../../commmon/AsideMenu/AsideMenu";
import AdminPageHeader from "../../commmon/Header/AdminPageHeader";

const RootAdmin = () => {
  return (
    <div>
      <AdminPageHeader whoAreYou={"admin"} />
      <div className="admin-composition">
        <AsideMenu />
        <AdminHomepage />
      </div>
      <BrowserRouter>
        <Switch>
          <Route path="/homepage" component={AdminHomepage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default RootAdmin;
