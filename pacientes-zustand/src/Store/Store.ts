import { create } from "zustand";
import type { DraftPatientFormData, Patient } from "../types";
type PatientStore = {
    patients: Patient[];
    addPatient: (patient: DraftPatientFormData) => void;
    removePatient: (id: string) => void;
};
export const usePatientStore = create<PatientStore>((set) => ({
  patients: [],
  addPatient: (patient) => {console.log("patient", patient)},
  removePatient: (id: string) => set((state) => ({ patients: state.patients.filter((patient) => patient.id !== id) })),
}));