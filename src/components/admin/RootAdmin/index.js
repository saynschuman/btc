import React from "react";
import "./index.scss";
import AdminHomepage from "../AdminHomepage/AdminHomepage";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AsideMenu from "../../commmon/AsideMenu/AsideMenu";
import AdminPageHeader from "../../commmon/Header/AdminPageHeader";
import AdminSettings from "../../admin/AdminSettings/AdminSettings";
import AdminReports from "../AdminReports/AdminReports";
import AdminPays from "../AdminPays/AdminPays";
import Applications from "../Applications/Applications";

const RootAdmin = () => {
  return (
    <BrowserRouter>
      <div>
        <AdminPageHeader whoAreYou={"admin"} />
        <AsideMenu />
        <Switch>
          <Route
            activeClassName={"is-active"}
            exact={true}
            path="/"
            component={AdminHomepage}
          />
          <Route
            activeClassName={"is-active"}
            path="/settings"
            component={AdminSettings}
          />
          <Route
            activeClassName={"is-active"}
            path="/reports"
            component={AdminReports}
          />
          <Route
            activeClassName={"is-active"}
            path="/pays"
            component={AdminPays}
          />
          <Route
            activeClassName={"is-active"}
            path="/applications"
            component={Applications}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default RootAdmin;
