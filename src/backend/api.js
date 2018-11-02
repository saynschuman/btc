import {
  adminList,
  investorList,
  InvestorReport,
  InvestitionReport,
  ChargeTable,
  HistoryApplications,
  SaleApplications,
  investPeriod,
  schemaSettings,
  yieldList,
  articleList,
  portalNews
} from "./mocks";

export const getHomePageAdminDataFromServer = path => {
  fetch(`https://atc-bl.nadzor.online/bl198765/admin/exchange/${path}`).then(
    res => {
      return fetch("https://atc-bl.nadzor.online/bl198765/admin/platform/", {
        headers: {
          Authorization: `Bearer ${res.jwt}`
        }
      })
        .then(res => res.json())
        .then(res => console.log(res));
    }
  );
};

export const getAdminsFromServer = () => {
  return adminList;
};

export const getInvestorsFromServer = () => {
  return investorList;
};

export const getInvestorsReportFromServer = () => {
  return InvestorReport;
};

export const getInvestitionsReportFromServer = () => {
  return InvestitionReport;
};

export const getChargeTableFromServer = () => {
  return ChargeTable;
};

export const getRequestApplicationsFromServer = () => {
  return SaleApplications;
};

export const getHistoryApplicationsFromServer = () => {
  return HistoryApplications;
};

export const getInvestPeriodFromServer = () => {
  return investPeriod;
};

export const getSchemaSettingsFromServer = () => {
  return schemaSettings;
};

export const getYieldListFromServer = () => {
  return yieldList;
};

export const getArticlesFromServer = () => {
  return articleList;
};

export const getPortalNewsFromServer = () => {
  return portalNews;
};
