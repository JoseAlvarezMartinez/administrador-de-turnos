import Paciente from "./Paciente";

const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-light text-3xl text-center">Listado Pacientes</h2>
      <p className="text-xl mt-2 text-center">
        Administra tus {""}
        <span className="text-cyan-500 font-bold ">Pacientes y Turnos</span>
      </p>

      <Paciente />
    </div>
  );
};

export default ListadoPacientes;
