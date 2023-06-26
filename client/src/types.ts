export type IListItemProps = {
  id: number;
  category: string;
  driverName: string;
};

export type MapProps = {
  list: {
    id: number;
    category: string;
    driverName: string;
    driverPhoneNumber: string;
    location: {
      latitude: number;
      longitude: number;
    };
  }[];
};

export interface Location {
  latitude: number;
  longitude: number;
}

export interface Vehicle {
  id: number;
  category: string;
  driverName: string;
  driverPhoneNumber: string;
  location: Location;
}

export interface Filters {
  categories: string;
  view: string;
}
