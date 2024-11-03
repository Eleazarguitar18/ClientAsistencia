import { Link } from "react-router-dom";

type Props = {};

export const HomePage = (props: Props) => {
  return (
    // <div className="bg-gradient-to-r from-slate-500 to-slate-700 text-white w-full h-screen flex flex-col justify-center items-center">
    <div className="gap-6 sm:gap-0 bg-teal-600 text-white bg-[url('src/images/bosque-montanas.jpg')] bg-cover bg-center h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl text-slate-50 lg:pb-24 md:pb-20 sm:pb-0">
        CLASE JOSUE
      </h1>
      <h1 className="text-4xl font-">BIENVENIDO</h1>
      <div>
        <h2 className="font-bold mb-2">Plaforma de asistencia</h2>
      </div>
      <div className="flex gap-2">
        <button className="bg-[#1c88a5] text-white p-3 rounded hover:bg-[#145665] transition duration-200">
          <Link to="/login">Ingresar</Link>
        </button>
        <button className="bg-[#1c88a5] text-white p-3 rounded hover:bg-[#145665] transition duration-200">
          <Link to="/register">Registrarse</Link>
        </button>
      </div>
    </div>
  );
};
