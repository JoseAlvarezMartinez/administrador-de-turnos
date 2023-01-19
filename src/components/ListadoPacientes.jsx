import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-light text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-2 text-center">
            Administra tus {""}
            <span className="text-cyan-500 font-bold ">Pacientes y Turnos</span>
          </p>

          <div className="md:h-screen overflow-y-scroll">
            {pacientes.map((paciente) => <Paciente key={paciente.id} paciente={paciente} />)}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-light text-3xl text-center">
            Aún no hay pacientes
          </h2>
          <p className="text-xl mt-2 text-center">
            Completa sus datos {""}
            <span className="text-cyan-500 font-bold ">y se verán aca</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
