type Address = string;
type Phone = string;
type Mail = string;
type OpeningHours = string;
type Coordinates = [number, number];

export type Contacts = {
  address: Address;
  phone: Phone;
  mail: Mail;
  openingHours: OpeningHours;
  coordinates: Coordinates;
};
