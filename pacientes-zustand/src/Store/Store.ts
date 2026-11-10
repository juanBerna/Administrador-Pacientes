import { create } from "zustand";
import type { DraftPatientFormData, Patient } from "../types";
import { v4 as uuidv4 } from "uuid";

type PatientStore = {
    patients: Patient[];
    activeId: Patient['id'] | null;
    addPatient: (patient: DraftPatientFormData) => void;
    removePatient: (id: Patient['id']) => void;
    getPatientById: (id: Patient['id']) => void;
    updatePatient: (updatedPatient: DraftPatientFormData) => void;
};

//vamos a generar un Id con uuidv4
const createPatient = (patient: DraftPatientFormData): Patient => {
  return {
    ...patient,
    id: uuidv4(),
  };
}

export const usePatientStore = create<PatientStore>((set) => ({
  patients: [],
  activeId: null,
  getPatientById: (id: Patient['id']) => {
    set({ activeId: id });
  },
  addPatient: (patient) => {
    const newPatient = createPatient(patient);
    set((state) => ({
      patients: [...state.patients, newPatient]
    }));
  },
  removePatient: (id: Patient['id']) => set((state) => ({ patients: state.patients.filter((patient) => patient.id !== id) })),
  updatePatient: (updatedPatient) => set((state) => ({
    patients: state.patients.map((patient) =>
      patient.id === state.activeId ? { id: state.activeId, ...updatedPatient } : patient,
  ),
  activeId: null
  })),
  
}));