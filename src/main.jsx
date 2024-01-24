import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import NuevoCliente, {
  action as actionClienteNuevo,
} from "./pages/NuevoCliente";
import Index, { loader as clientesLoader } from "./pages/Index";
import ErrorPages from "./components/ErrorPages";
import EditarCliente, {
  loader as loaderEditarCliente,
  action as actionEditarCliente,
} from "./pages/EditarCliente";
import { action as actionEliminarCliente } from "./components/Cliente";

//Children: prop que se usa para "intercambiar" el outlet por el otro componente que necesitamos
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientesLoader,
        errorElement: <ErrorPages />,
      },
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,
        action: actionClienteNuevo,
        errorElement: <ErrorPages />,
      },
      {
        path: "/clientes/:clienteId/editar",
        element: <EditarCliente />,
        loader: loaderEditarCliente,
        action: actionEditarCliente,
        errorElement: <ErrorPages />,
      },
      {
        path: "/clientes/:clienteId/eliminar",
        action: actionEliminarCliente,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {" "}
    <RouterProvider router={router} />
  </React.StrictMode>
);
