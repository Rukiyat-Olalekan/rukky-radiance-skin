import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import AvailableProducts from "./components/NewProducts/AvailableProducts";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Cart from "./components/Cart/Cart";

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
        element: <SignIn />,
      },
      {
        path: "/create",
        element: <SignUp />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
