import { Contacts } from "./model";

const getContacts = async (): Promise<Contacts> => {
  return {
    address: "",
    mail: "",
    openingHours: "",
    phone: "",
    coordinates: [0, 0],
  };
};
