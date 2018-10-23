import { admin } from "./mocks";

export const checkiSAdmin = data => {
  if (data.id === admin.id && data.password === admin.password) {
    return true;
  } else {
    return false;
  }
};
