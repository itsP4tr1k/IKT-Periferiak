import Favicon from "react-favicon";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/termek">
          <Route
            path="eger"
            element={
              <ProductPage
                image="eger"
                title="Prémium Egér"
                subtitle="FruitfulTech Heavenly Extralight v2"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas, enim ut lobortis imperdiet, ligula erat vehicula purus, ut tincidunt lectus nulla ac nisi."
                price="15,000"
              />
            }
          ></Route>
          <Route
            path="billentyuzet"
            element={
              <ProductPage
                image="billentyuzet"
                title="Prémium Billentyűzet"
                subtitle="FruitfulTech Typewriter - Cherry MX White"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas, enim ut lobortis imperdiet, ligula erat vehicula purus, ut tincidunt lectus nulla ac nisi."
                price="20,000"
              />
            }
          ></Route>
          <Route
            path="fejhallgato"
            element={
              <ProductPage
                image="fejhallgato"
                title="Prémium Fejhallgató"
                subtitle="FruitfulTech H40NC"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas, enim ut lobortis imperdiet, ligula erat vehicula purus, ut tincidunt lectus nulla ac nisi."
                price="45,000"
              />
            }
          ></Route>
          <Route
            path="hangszoro"
            element={
              <ProductPage
                image="hangszoro"
                title="Prémium Hangszóró"
                subtitle="FruitfulTech StereoX 3"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas, enim ut lobortis imperdiet, ligula erat vehicula purus, ut tincidunt lectus nulla ac nisi."
                price="50,000"
              />
            }
          ></Route>
          <Route
            path="monitor"
            element={
              <ProductPage
                image="monitor"
                title="Prémium Montior"
                subtitle="FruitfulTech Light Vision - 360Hz 1ms IPS"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas, enim ut lobortis imperdiet, ligula erat vehicula purus, ut tincidunt lectus nulla ac nisi."
                price="75,000"
              />
            }
          ></Route>
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
}

const Root = () => {
  return (
    <>
      <Favicon url={`${process.env.PUBLIC_URL}/img/branding.png`} />
      <Navbar />
      <Outlet />
    </>
  );
};

export { App };
