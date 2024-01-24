import { useLoaderData } from "react-router-dom";
import { obtenerClientes } from "../data/Clientes";
import Cliente from "../components/Cliente";

export function loader() {
  const clientes = obtenerClientes();

  return clientes;
}

function Index() {
  const clientes = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-white">Clientes</h1>
      <p className="mt-3 text-white">Administra tus Clientes</p>

      {clientes.length ? (
        <table className="w-full text-white shadow mt-5 table-auto bg-gray-700">
          <thead className="bg-violet-700">
            <tr>
              <th className="p-2">Cliente</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <Cliente cliente={cliente} key={cliente.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-white text-center mt-10">
          No hay clientes disponibles
        </p>
      )}
    </>
  );
}

export default Index;
