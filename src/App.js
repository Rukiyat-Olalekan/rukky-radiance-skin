
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root";
import AvailableProducts from "./components/Products/AvailableProducts";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <AvailableProducts />,
      },
      {
        path: "/login",
        element: <SignIn />
      },
      {
        path: "/create",
        element: <SignUp />,
      },
    ],
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App