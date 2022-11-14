import { createBrowserRouter, Outlet } from "react-router-dom";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage.js/ErrorPage";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact></Contact>,
      },
    ],
  },
]);

function Roots() {
  return (
    <div id="detail">
      <Outlet></Outlet>
    </div>
  );
}

export { Roots, router };
