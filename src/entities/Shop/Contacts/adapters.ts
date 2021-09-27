import { Contacts } from "@/entities/Shop/Contacts/model";
import { getContactsAPI } from "@/services/api";

export const getContactsAdapter = async (): Promise<Contacts> => {
  // Response API here //
  const response = await getContactsAPI();
  // Response API  //

  // Transformation API data here //
  // Transformation API data here //
  return {
    address: response.data.address,
    mail: response.data.email,
    openingHours: response.data.schedule,
    phone: response.data.phone,
  };
};
