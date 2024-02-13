import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Wallet } from "./pages/wallet/wallet.tsx";
import { Network } from "./pages/network/network.tsx";
import { Task } from "./pages/task/task.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "wallet",
        element: <Wallet />,
      },
      {
        path: "network",
        element: <Network />,
      },
      {
        path: 'task',
        element: <Task />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
