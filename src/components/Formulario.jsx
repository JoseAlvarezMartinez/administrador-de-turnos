import { useState, useEffect } from "react";
import Error from "../components/Error";
const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [error, setError] = useState(false);
  const [informacion, setInformacion] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    turno: "",
    sintomas: "",
  });

  useEffect(() => {
    if (Object.values(paciente).length > 0) {
      setInformacion(paciente);
    }
  }, [paciente]);
  function generarID() {
    const fecha = Date.now().toString(36).substr(2);
    const random = Math.random().toString(36).substr(2);
    return fecha + random;
  }
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-light text-3xl text-center">
        Completá el Formulario
      </h2>

      <p className="text-lg mt-2 text-center mb-5">
        Añadí Pacientes y {""}
        <span className="text-cyan-500 font-bold ">Administralos</span>
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (Object.values(informacion).includes("")) {
            setError(true);
            setTimeout(() => {
              setError(false);
            }, 2000);
          } else {
            setError(false);
            if (paciente.id) {
              const actualizar = pacientes.map((pacienteState) =>
                pacienteState.id === paciente.id ? informacion : pacienteState
              );
              setPacientes(actualizar)
              setPaciente({});
            } else {
              informacion.id = generarID();
              setPacientes([...pacientes, informacion]);
            }

            setInformacion({
              nombre: "",
              apellido: "",
              dni: "",
              turno: "",
              sintomas: "",
            });
          }
        }}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        <div className="mb-5">
          <label
            htmlFor="nombre"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre
          </label>
          <input
            onChange={(e) =>
              setInformacion({ ...informacion, nombre: e.target.value })
            }
            value={informacion.nombre}
            id="nombre"
            type="text"
            placeholder="Nombre del Paciente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="apellido"
            className="block text-gray-700 uppercase font-bold"
          >
            Apellido
          </label>
          <input
            onChange={(e) =>
              setInformacion({ ...informacion, apellido: e.target.value })
            }
            value={informacion.apellido}
            id="apellido"
            type="text"
            placeholder="Apellido del Paciente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="dni"
            className="block text-gray-700 uppercase font-bold"
          >
            D.N.I
          </label>
          <input
            onChange={(e) =>
              setInformacion({ ...informacion, dni: e.target.value })
            }
            value={informacion.dni}
            id="dni"
            type="number"
            placeholder="D.N.I"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="turno"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha del Turno
          </label>
          <input
            onChange={(e) =>
              setInformacion({ ...informacion, turno: e.target.value })
            }
            value={informacion.turno}
            id="turno"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>
          <textarea
            onChange={(e) =>
              setInformacion({ ...informacion, sintomas: e.target.value })
            }
            value={informacion.sintomas}
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los Síntomas"
          />
        </div>

        <input
          type="submit"
          className="bg-cyan-500 w-full p-3 text-white uppercase font-bold hover:bg-cyan-600 cursor-pointer transition-colors"
          value={"Agregar Paciente"}
        />

        {error && <Error>Todos los campos son obligatorios</Error>}
      </form>
    </div>
  );
};

export default Formulario;
