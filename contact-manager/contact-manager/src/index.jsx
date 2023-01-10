import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./error";
import Contact, {   loader as contactLoader, } from "./routes/contact";
import './index.css';
import Root, { loader as rootLoader ,action as rootAction
} from "./routes/root";
import EditContact from "./routes/edit";
import {action as editAction} from "./routes/edit";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  [
    { 
      path: "/", 
      element: <Root />,
      action:rootAction,
      loader:rootLoader, 
      errorElement: <ErrorPage />, 
      children:[
        {
          path: "contacts/:contactId",
          element: <Contact />,loader:contactLoader,
        },
        {
          path: "contacts/:contactId/edit",
          element: <EditContact />,
          loader: contactLoader,
          action:editAction
        },
      ]
    },
  ]
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
