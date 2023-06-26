import Content from "./components/Content";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import SingleCocktail from "./pages/SingleCocktail";
import { loader as homeLoader } from "./components/Content";
import { loader as cocktailLoader } from "./pages/SingleCocktail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Content />,
        loader: homeLoader,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cocktail/:id",
        element: <SingleCocktail />,
        loader: cocktailLoader,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
