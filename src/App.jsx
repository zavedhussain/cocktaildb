import Content from "./components/Content";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as homeLoader } from "./components/Content";
import { loader as cocktailLoader } from "./pages/SingleCocktail";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import SingleCocktail from "./pages/SingleCocktail";
import SinglePageError from "./pages/SinglePageError";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Content />,
        loader: homeLoader(queryClient),
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/cocktail/:id",
        element: <SingleCocktail />,
        errorElement: <SinglePageError />,
        loader: cocktailLoader(queryClient),
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
