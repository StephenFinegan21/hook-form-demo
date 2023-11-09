export type TPersonal = {
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
  };
  
  export type TLocation = {
    street: string;
    city: string;
    country: string;
    zipCode: string;
  };
  
  export type TLivingWith = {
    spouse: string;
    children: string[];
  };
  
  export type TData = {
    personal: TPersonal;
    location: TLocation;
    livingWith: TLivingWith;
  };
  