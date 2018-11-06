import React from "react";
import "./index.scss";
import AdminHomepage from "../AdminHomepage/AdminHomepage";
import { Route, Switch, HashRouter } from "react-router-dom";
import AsideMenu from "../../commmon/AsideMenu/AsideMenu";
import AdminPageHeader from "../../commmon/Header/AdminPageHeader";
import AdminSettings from "../../admin/AdminSettings/AdminSettings";
import AdminReports from "../AdminReports/AdminReports";
import AdminPays from "../AdminPays/AdminPays";
import Applications from "../Applications/Applications";
import AdminSchema from "../AdminSchema/AdminSchema";
import AdminOther from "../AdminOther/AdminOther";
import News from "../News/News";

const RootAdmin = () => {
  return (
    <HashRouter>
      <div>
        <AdminPageHeader whoAreYou={"admin"} />
        <AsideMenu />
        <Switch>
          <Route
            activeClassName={"is-active"}
            path="/"
            exact
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
          <Route
            activeClassName={"is-active"}
            path="/schema"
            component={AdminSchema}
          />
          <Route
            activeClassName={"is-active"}
            path="/other"
            component={AdminOther}
          />
          <Route activeClassName={"is-active"} path="/news" component={News} />
          <Route path="*" component={AdminHomepage} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default RootAdmin;
