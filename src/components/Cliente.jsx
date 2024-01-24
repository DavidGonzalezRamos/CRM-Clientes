import { Form, redirect, useNavigate } from "react-router-dom";
import { eliminarCliente } from "../data/Clientes";

export async function action({ params }) {
  await eliminarCliente(params.clienteId);
  return redirect("/");
}

const Cliente = ({ cliente }) => {
  const navigate = useNavigate();
  const { nombre, telefono, email, empresa, id } = cliente;
  return (
    <>
      <tr className="border-b">
        <td className="p-6 space-y-2">
          <p className="text-2xl text-white">{nombre}</p>
          <p>{empresa}</p>
        </td>

        <td className="p-6">
          <p className="text-white">
            <span className="text-white uppercase font-bold">Email: </span>
            {email}
          </p>
          <p className="text-white">
            <span className="text-white uppercase font-bold">Tel: </span>
            {telefono}
          </p>
        </td>
        <td className="p-6 flex gap-3">
          <button
            type="button"
            className="uppercase font-bold text-xs text-blue-600 hover:text-blue-400"
            onClick={() => navigate(`/clientes/${id}/editar`)}
          >
            Editar
          </button>

          <Form
            method="post"
            action={`/clientes/${id}/eliminar`}
            onSubmit={(e) => {
              if (!confirm("¿Deseas eliminar el registro?")) {
                e.preventDefault();
              }
            }}
          >
            <button
              type="submit"
              className="uppercase font-bold text-xs text-red-600 hover:text-red-400"
            >
              Eliminar
            </button>
          </Form>
        </td>
      </tr>
    </>
  );
};

export default Cliente;
