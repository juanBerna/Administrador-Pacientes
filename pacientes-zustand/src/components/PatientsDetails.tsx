import type { Patient } from '../types'
import PatienDetailItem from './PatienDetailItem';
import { usePatientStore } from '../Store/Store';

type PatientsDetailsProps = {
  patient: Patient;
};

export default function PatientsDetails({ patient }: PatientsDetailsProps) {

    const removePatient = usePatientStore((state) => state.removePatient);
    const getPatientById = usePatientStore((state) => state.getPatientById);


  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white">
      <PatienDetailItem label="ID" data={patient.id}
      />
      <PatienDetailItem label="Nombre" data={patient.name}
      />
      <PatienDetailItem label="Propietario" data={patient.caretaker}
      />
      <PatienDetailItem label="mail" data={patient.email}
      />
      <PatienDetailItem label="Fecha de Alta" data={patient.date.toString()}
      />
      <PatienDetailItem label="Sintomas" data={patient.symptoms}
      />

      <div className="flex justify-between mt-10">
        <button className ="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
        type="button"
        onClick={() => getPatientById(patient.id)}
        >
Editar
        </button>
        <button className ="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
        type="button"
        onClick={() => removePatient(patient.id)}
        >
Eliminar
        </button>
      </div>

      
    </div>
  )
}
