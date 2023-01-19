import { useContext } from "react";
import { PacienteContext } from "../App";
const Paciente = ({ paciente }) => {
  const { handleEliminar,setPaciente } = useContext(PacienteContext);
  const { nombre, apellido, dni, turno, sintomas, id } = paciente;
  const fecha = new Date(turno).toLocaleDateString("es-ES",{day:"2-digit",month:"long",year:"numeric"})

  return (
    <div className="mx-5 my-5 bg-white shadow-md px-5 py-5 rounded-xl">
      <div className="flex justify-between mb-5">
        <lord-icon
        onClick={() => {setPaciente(paciente)}}
          src="https://cdn.lordicon.com/hwuyodym.json"
          trigger="hover"
          colors="primary:#06b6db"
          style={{ width: "35px", height: "35px", cursor: "pointer" }}
        ></lord-icon>
        <lord-icon
          onClick={() => {
            handleEliminar(id);
          }}
          src="https://cdn.lordicon.com/kfzfxczd.json"
          trigger="hover"
          colors="primary:#ff0000"
          style={{ width: "35px", height: "35px", cursor: "pointer" }}
        ></lord-icon>
      </div>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Apellido: {""}
        <span className="font-normal normal-case">{apellido}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        D.N.I: {""}
        <span className="font-normal normal-case">{dni}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha del Turno: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>
    </div>
  );
};

export default Paciente;
