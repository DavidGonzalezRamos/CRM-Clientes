import { useRouteError } from "react-router-dom";
export default function errorPages() {
  const error = useRouteError();

  return (
    <div className="space-y-8">
      <h1 className="text-center text-6xl font-extrabold mt-20 text-violet-900">
        CRM-Clientes
      </h1>
      <p className="text-center text-white">Hubo un error</p>
      <p className="text-center text-white">
        {error.statusText || error.message}
      </p>
    </div>
  );
}
