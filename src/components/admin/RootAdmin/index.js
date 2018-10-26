import React from "react";
import "./index.scss";
import AdminHomepage from "../AdminHomepage/AdminHomepage";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AsideMenu from "../../commmon/AsideMenu/AsideMenu";
import AdminPageHeader from "../../commmon/Header/AdminPageHeader";
import AdminSettings from "../../admin/AdminSettings/AdminSettings";

const RootAdmin = () => {
  return (
    <BrowserRouter>
      <div>
        <AdminPageHeader whoAreYou={"admin"} />
        <AsideMenu />
        <Switch>
          <Route exact={true} path="/" component={AdminHomepage} />
          <Route path="/settings" component={AdminSettings} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default RootAdmin;
