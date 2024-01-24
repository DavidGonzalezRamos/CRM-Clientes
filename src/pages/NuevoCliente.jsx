import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import Formulario from "../components/Formulario";
import Error from "../components/Error";
import { agregarCliente } from "../data/Clientes";

/*formData: forma de acceder a la informacion de un formulario*/
export async function action({ request }) {
  const formData = await request.formData();

  const datos = Object.fromEntries(formData);

  const email = formData.get("email");

  //Validacion
  const errores = [];
  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios");
  }

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if (!regex.test(email)) {
    errores.push("Email no es valido");
  }
  //Retornar los errores
  if (Object.keys(errores).length) {
    return errores;
  }

  await agregarCliente(datos);

  return redirect("/");
}

const NuevoCliente = () => {
  const navigate = useNavigate();
  const errores = useActionData();

  return (
    <>
      <h1 className="font-black text-4xl text-white">Nuevos Clientes</h1>
      <p className="mt-3 text-white">
        Completa el formulario para poder agregar el cliente
      </p>

      <div className="flex justify-end">
        <button
          className=" text-white bg-violet-900 px-3 py-1 font-bold uppercase"
          type="button"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>

      <div className="bg-gray-700 rounded-md shadow md:w-3/4 mx-auto px-5 py-10 mt-20 text-white">
        {
          //Hacemos corto circuito y hacemos map del error y del indice donde esta el error pq puese estar en diferentes campos
          errores?.length &&
            errores.map((error, i) => <Error key={i}>{error}</Error>)
        }
        <Form method="POST">
          <Formulario />

          <button
            type="Sumbit"
            className="bg-violet-700 w-full mt-5 p-3 text-lg font-bold uppercase"
          >
            Registrar Cliente
          </button>
        </Form>
      </div>
    </>
  );
};

export default NuevoCliente;
