import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  /*Outlet: es un contenedor dinamico que se usa para poder usar lo que tenga antes de el 
en todas las paginas que queramos 
se pasa a la pagina principal mediante un children*/

  /*useLocation: funcion que ayuda a poder navegar entre paginas usando su path  */

  const location = useLocation();
  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-violet-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CRM-React
        </h2>
        <nav className="mt-10">
          <Link
            className={`${
              location.pathname === "/" ? "text-violet-700" : "text-white"
            } text-2xl block mt-2 hover:text-violet-700`}
            to="/"
          >
            Clientes
          </Link>
          <Link
            className={`${
              location.pathname === "/clientes/nuevo"
                ? "text-violet-700"
                : "text-white"
            } text-2xl block mt-2 hover:text-violet-700 `}
            to="/clientes/nuevo"
          >
            Nuevos Clientes
          </Link>
        </nav>
      </aside>
      <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
