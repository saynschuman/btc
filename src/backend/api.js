import {
  admin,
  investor,
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

export const whoAreYou = data => {
  if (data.id === admin.id && data.password === admin.password) {
    return "admin";
  }
  if (data.id === investor.id && data.password === investor.password) {
    return "investor";
  } else {
    return false;
  }
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
