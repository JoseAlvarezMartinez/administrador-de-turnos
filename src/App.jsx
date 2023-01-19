import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState, useEffect, createContext } from "react";
export const PacienteContext = createContext();
function App() {
  const [paciente,setPaciente] = useState({})
  const [pacientes, setPacientes] = useState(
    JSON.parse(localStorage.getItem("pacientes")) ?? []
  );

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  function handleEliminar(id){
    const eliminar = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(eliminar)
  }
  return (
    <PacienteContext.Provider value={{handleEliminar,setPaciente}}>
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario setPacientes={setPacientes} pacientes={pacientes} paciente={paciente} setPaciente={setPaciente}/>
        <ListadoPacientes pacientes={pacientes} />
      </div>
    </div>
    </PacienteContext.Provider>
  );
}

export default App;
