import { admin, investor, adminList, investorList } from "./mocks";

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
