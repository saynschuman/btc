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
  portalNews,
} from './mocks'

export const getHomePageAdminDataFromServer = path => {
  fetch(`https://atc-bl.nadzor.online/bl198765/admin/exchange/${path}`).then(res => {
    return fetch('https://atc-bl.nadzor.online/bl198765/admin/platform/', {
      headers: {
        Authorization: `Bearer ${res.jwt}`,
      },
    })
      .then(res => res.json())
      .then(res => console.log(res))
  })
}

export const getAdminsFromServer = () => {
  return fetch('https://atc-bl.nadzor.online/bl198765/admin/', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }).then(res => res.json())
}

export const getInvestorsFromServer = () => {
  return fetch('https://atc-bl.nadzor.online/bl198765/admin/reports/investors/', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }).then(res => res.json())
}

export const getInvestorsReportFromServer = () => {
  return fetch('https://atc-bl.nadzor.online/bl198765/admin/reports/investors/', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }).then(res => res.json())
}

export const getInvestitionsReportFromServer = () => {
  return fetch('https://atc-bl.nadzor.online/bl198765/admin/reports/investments/?active=true', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }).then(res => res.json())
}

export const getChargeTableFromServer = () => {
  return fetch('https://atc-bl.nadzor.online/bl198765/admin/payouts/', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }).then(res => res.json())
}

export const getRequestApplicationsFromServer = () => {
  return fetch('https://atc-bl.nadzor.online/bl198765/admin/sellShares/?offset=0&count=30', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }).then(res => res.json())
}

export const getHistoryApplicationsFromServer = () => {
  // return HistoryApplications;
  return []
}

export const getInvestPeriodFromServer = () => {
  // return investPeriod;
  return []
}

export const getSchemaSettingsFromServer = () => {
  // return schemaSettings;
  return []
}

export const getYieldListFromServer = () => {
  return yieldList
}

export const getArticlesFromServer = () => {
  return articleList
}

export const getPortalNewsFromServer = () => {
  return portalNews
}
