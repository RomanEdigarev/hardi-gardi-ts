import { LayoutAPI } from "@/services/api/model/LayoutAPI";
// Alias Type //
type ContactsPhone = string;
type ContactsEmail = string;
type ContactsAddress = string;
type ContactsShedule = string;
type ContactsGPSN = number;
type ContactsGPSS = number;
type ContactsCopyright = string;
// Alias Type END //

type ContactsData = {
  phone: ContactsPhone;
  email: ContactsEmail;
  address: ContactsAddress;
  schedule: ContactsShedule;
  gps_n: ContactsGPSN;
  gps_s: ContactsGPSS;
  copyright: ContactsCopyright;
};

export type Contacts = LayoutAPI<ContactsData>;
