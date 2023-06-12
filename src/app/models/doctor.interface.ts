    import { Patient } from "./patient.interface";

    export interface Doctor {
        doctor_Id: number;
        doctor_Name: string | null;
        specialization: string | null;
        doctor_No: number;
        imageData: string | null;
        patients: Patient[] | null;
        editMode?: boolean; // Add the 'editMode' property
      }
              