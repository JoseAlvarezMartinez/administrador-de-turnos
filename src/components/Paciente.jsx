const Paciente = () => {
  return (
    <div className="mx-5 my-5 bg-white shadow-md px-5 py-5 rounded-xl">
      <div className="flex justify-between mb-5">
        <lord-icon
          src="https://cdn.lordicon.com/hwuyodym.json"
          trigger="hover"
          colors="primary:#06b6db"
          style={{ width: "35px", height: "35px",cursor:"pointer"}}
        ></lord-icon>
        <lord-icon
          src="https://cdn.lordicon.com/kfzfxczd.json"
          trigger="hover"
          colors="primary:#ff0000"
          style={{ width: "35px", height: "35px",cursor:"pointer"}}
        ></lord-icon>
      </div>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case"></span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case"></span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case"></span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case"></span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: {""}
        <span className="font-normal normal-case"></span>
      </p>
    </div>
  );
};

export default Paciente;
