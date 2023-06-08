  import { Doctor } from "./doctor.interface";

  export interface Patient {
      patient_Id: number;
      patient_Name: string | null;
      disease: string | null;
      email: string | null;
      patient_No: number;
      doctor: Doctor | null;
      editMode?: boolean; // Add the 'editMode' property here
    }
    