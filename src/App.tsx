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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />}></Route>
        <Route
          path="/eger"
          element={<h1 className="text-white text-center">Egér</h1>}
        ></Route>
        <Route
          path="/billentyuzet"
          element={<h1 className="text-white text-center">Billentyűzet</h1>}
        ></Route>
        <Route
          path="/fejhallgato"
          element={<h1 className="text-white text-center">Fejhallgató</h1>}
        ></Route>
        <Route
          path="/hangszoro"
          element={<h1 className="text-white text-center">Hangszóró</h1>}
        ></Route>
        <Route
          path="/monitor"
          element={<h1 className="text-white text-center">Monitor</h1>}
        ></Route>
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
