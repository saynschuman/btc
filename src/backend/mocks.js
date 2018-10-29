export const admin = {
  id: "admin",
  password: "123"
};

export const investor = {
  id: "investor",
  password: "123"
};

export const adminList = [
  {
    id: 412541673,
    password: "sdfewgg3s32f",
    rule: "admin",
    email: "watson@gmail.com"
  },
  {
    id: 4122342355,
    password: "sdfewgg3s32f",
    rule: "moderator",
    email: "brain@gmail.com"
  }
];

export const investorList = [
  {
    id: 412541673,
    name: "Сергей",
    surName: "Сергеев",
    status: true
  },
  {
    id: 412541621,
    name: "Сергей",
    surName: "Сергеев",
    status: false
  }
];

export const InvestorReport = [
  {
    id: 123123,
    name: "Сергрей",
    surName: "Сергеев",
    power: 12.3212,
    payed: 12.3213,
    phone: "+7(987)234-32-34",
    email: "watson@mail.ru"
  },
  {
    id: 12312351,
    name: "Сергрей",
    surName: "Сергеев",
    power: 12.3212,
    payed: 12.3213,
    phone: "+7(987)234-32-34",
    email: "watson@mail.ru"
  }
];

export const InvestitionReport = [
  {
    id: 123123,
    dateInv: "05.06.2018",
    investorId: 3423123,
    name: "Сергей",
    surName: "Сергеев",
    startSumm: 0.15453,
    leftInv: 0.15453,
    koef: 0.8,
    dateEnd: "05.06.2018(40дн)",
    alreadyPayed: 2.15453
  },
  {
    id: 136367,
    dateInv: "05.06.2018",
    investorId: 3423123,
    name: "Сергей",
    surName: "Сергеев",
    startSumm: 0.15453,
    leftInv: 0.15453,
    koef: 0.8,
    dateEnd: "05.06.2018(40дн)",
    alreadyPayed: 2.15453
  }
];

export const ChargeTable = [
  {
    investorId: 12421214,
    investitionId: 121412412,
    name: "Vasya",
    surName: "Vasisliev",
    paySize: 0.15452,
    koef: 0.6,
    payed: 2.32525
  },
  {
    investorId: 23251521,
    investitionId: 121412412,
    name: "Vasya",
    surName: "Vasisliev",
    paySize: 0.15452,
    koef: 0.6,
    payed: 2.32525
  },
  {
    investorId: 747541521,
    investitionId: 121412412,
    name: "Vasya",
    surName: "Vasisliev",
    paySize: 0.15452,
    koef: 0.6,
    payed: 2.32525
  }
];

export const SaleApplications = [
  {
    timeDate: 123123,
    investorId: 1231312,
    investitionId: 123123,
    name: "wedwed",
    surName: "wewef",
    leftInvest: "wedwed",
    reqValue: "wewed",
    cost: 232,
    summ: 2324,
    idAdmAplied: 1212,
    accept: true
  },
  {
    timeDate: 123123,
    investorId: 1231312,
    investitionId: 23434243,
    name: "wedwed",
    surName: "wewef",
    leftInvest: "wedwed",
    reqValue: "wewed",
    cost: 232,
    summ: 2324,
    idAdmAplied: 1212,
    accept: true
  }
];

export const HistoryApplications = [
  {
    timeDate: 123123,
    timePay: 123123,
    investorId: 1231312,
    investitionId: 123123,
    name: "wedwed",
    surName: "wewef",
    powerValue: "234",
    cost: 232,
    idAdmAplied: 1212,
    summ: 2324
  },
  {
    timeDate: 123123,
    timePay: 123123,
    investorId: 1231312,
    investitionId: 123123,
    name: "wedwed",
    surName: "wewef",
    powerValue: "234",
    cost: 232,
    idAdmAplied: 1212,
    summ: 2324
  }
];
