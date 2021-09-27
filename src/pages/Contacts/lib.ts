import { Contacts } from "@/entities/Shop/Contacts/model";
import { useStore } from "@/services/vuex";

export const useContacts = (): { contacts: Contacts } => {
  return { contacts: useStore().getters["shop/getContacts"] };
};
