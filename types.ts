export type addressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

export type contactType = {
  id: string;
  name: string;
  email: string;
  address: addressType;
};

export type postType = {
  id: string;
  title: string;
  body: string;
};

export type docType = {
  id: number;
  icon: string;
  path: string;
};

export type commentType = {
  id: number;
  name: string;
  email: string;
};
