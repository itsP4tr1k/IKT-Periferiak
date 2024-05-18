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
import BillentyuzetPage from "./pages/BillentyuzetPage";
import FejhallgatoPage from "./pages/FejhallgatoPage";
import HangszoroPage from "./pages/HangszoroPage";
import MonitorPage from "./pages/MonitorPage";
import EgerPage from "./pages/EgerPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/termek">
          <Route path="eger" element={<EgerPage />}></Route>
          <Route path="billentyuzet" element={<BillentyuzetPage />}></Route>
          <Route path="fejhallgato" element={<FejhallgatoPage />}></Route>
          <Route path="hangszoro" element={<HangszoroPage />}></Route>
          <Route path="monitor" element={<MonitorPage />}></Route>
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
