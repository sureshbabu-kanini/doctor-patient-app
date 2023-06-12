import { Admin } from "./Admin.interface";

export interface Customer {
    customer_Id: number;
    customer_Name: string | null;
    customer_Email: string | null;
    customer_Password: string | null;
  }
  