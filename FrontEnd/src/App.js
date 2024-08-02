import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import ErrorPage from "./Page/ErrorPage";
import HomePage from "./Page/HomePage";
import RootLayout from "./Page/RootLayout";
import AccountPage from "./Page/AccountPage";
//------------------------
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/user/:action",
        element: <AccountPage></AccountPage>,
      },
    ],
  },
  {
    path: "/error",
    element: <ErrorPage></ErrorPage>,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
