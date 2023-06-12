import { Customer } from "./Customer.interface";

export interface Admin {
    admin_Id: number;
    admin_Name: string | null;
    admin_Email: string | null;
    admin_Password: string | null;
  }
  