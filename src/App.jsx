import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import { NotFound } from "./components/NotFound/NotFound";
import PopularCar from "./components/PopularCars/PopularCars";
import CarDetails from "./components/Cars/CarDetails/CarDetails";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{ index: true, element: <Home /> }],
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/popularcars",
      element: <PopularCar />,
    },
    {
      path: "/carDetails/:carId",
      element: <CarDetails />,
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
