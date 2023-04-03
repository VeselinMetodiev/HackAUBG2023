export type IconT = {
  name: any;
  size: number;
  color: string;
  style?: any;
};

export type TabBarIconT = {
  focused: boolean;
  name: any;
};

export type MessageT = {
  image: any;
  lastMessage: string;
  name: string;
};

export type DataT = {
  id: number;
  name: string;
  isOnline: boolean;
  match: string;
  description: string;
  message: string;
  image: any;
  age?: string;
  info1?: string;
  info2?: string;
  info3?: string;
  info4?: string;
  location?: string;
};

export type ProfileItemT = {
  age?: string;
  info1?: string;
  info2?: string;
  info3?: string;
  info4?: string;
  location?: string;
  matches: string;
  name: string;
};

export type CardItemT = {
  description?: string;
  hasActions?: boolean;
  hasVariant?: boolean;
  image: any;
  isOnline?: boolean;
  matches?: string;
  name: string;
};

export type CardT = {
  photo: string;
  title: string;
};
