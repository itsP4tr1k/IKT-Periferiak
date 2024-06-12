import Favicon from "react-favicon";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import KosarPage from "./pages/KosarPage";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { createContext, useState } from "react";

const CartCtx = createContext(null);

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/kosar" element={<KosarPage />}></Route>
        <Route path="/termek">
          <Route
            path="eger"
            element={
              <ProductPage
                image="eger"
                title="Prémium Egér"
                subtitle="FruitfulTech Heavenly Extralight v2"
                description="Fedezze fel a precizitás és a kényelem tökéletes kombinációját prémium egereinkkel. Ergonomikus kialakításának köszönhetően hosszú órákon át tartó használat során is kényelmes marad. Az állítható DPI beállítások lehetővé teszik a tökéletes érzékenység beállítását, legyen szó játékokról vagy irodai munkáról. A stílusos fehér vagy fekete kivitel tökéletesen illeszkedik bármely munkakörnyezetbe vagy gamer setupba."
                price="15,000"
                use={[
                  "Felhasználói bemenet: Az egér segítségével a felhasználó irányíthatja a számítógépes kurzort, kattintásokkal és mozdulatokkal vezérelheti a különböző alkalmazásokat és funkciókat.",
                  "Pontosság és navigáció: Különösen hasznos grafikai tervezés, játékok és más precíziós munkák esetén, ahol pontos kurzor mozgatás szükséges.",
                  "Gördítősáv és további gombok: Lehetővé teszik az oldalak gördítését, valamint további funkciókhoz való gyors hozzáférést.",
                ]}
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
                description="Tapasztalja meg a gépelés új szintjét prémium billentyűzeteinkkel, amelyek mechanikus vagy membrán változatban is elérhetők. A háttérvilágítás különféle színekben és fényerősséggel állítható, így sötétben is könnyen használható. A kiváló minőségű anyagokból készült billentyűk tartósak és csendesek, így ideálisak mind játékhoz, mind munkához. Válasszon a fehér vagy fekete dizájn közül, hogy tökéletesen illeszkedjen asztalához."
                price="20,000"
                use={[
                  "Szövegbevitel: Alapvető eszköz a szövegek, kódok és más információk beviteléhez.",
                  "Gyorsbillentyűk és makrók: Lehetővé teszik a gyors és hatékony munkát azáltal, hogy a felhasználók egyes funkciókat gyorsbillentyűkkel vagy előre beállított makrókkal érhetnek el.",
                  "Játékvezérlés: Sok játékos számára fontos periféria, különösen a mechanikus billentyűzetek, amelyek gyors reakcióidőt és hosszú élettartamot biztosítanak.",
                ]}
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
                description="Merüljön el a tiszta és részletgazdag hangzás világában prémium fejhallgatóinkkal. A puha, párnázott fülpárnák és az állítható fejpánt maximális kényelmet biztosítanak hosszú távú viselés során is. A beépített mikrofon kristálytiszta hangátvitelt biztosít, így tökéletes választás online játékhoz és videokonferenciákhoz. Elegáns fehér vagy fekete színben kapható, hogy megfeleljen stílusának."
                price="45,000"
                use={[
                  "Hangélmény: Kiváló minőségű hangot biztosít, amely elengedhetetlen a zenehallgatáshoz, filmnézéshez vagy játékhoz.",
                  "Kommunikáció: Beépített mikrofonnal ellátott fejhallgatók lehetővé teszik az online beszélgetést, videokonferenciákat és játékon belüli kommunikációt.",
                  "Környezetvédelem: Segít a zajok kizárásában és a magánszféra megőrzésében, anélkül hogy zavarná a környezetet.",
                ]}
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
                description="Töltse meg terét gazdag, életteli hangzással prémium hangszóróinkkal. Az erőteljes basszus és a tiszta magas hangok lenyűgöző hangzást biztosítanak, akár zenét hallgat, filmet néz, vagy játékot játszik. Kompakt méretük ellenére erős hangteljesítményt nyújtanak. A modern, minimalista dizájn fehér és fekete változatban elérhető, így bármilyen enteriőrbe könnyedén beilleszthető."
                price="50,000"
                use={[
                  "Külső hangszórók: Jobb hangminőséget nyújtanak, mint a beépített számítógépes hangszórók, amelyeket zenehallgatáshoz, filmnézéshez és játékhoz használnak.",
                  "Térhangzás: Speciális hangszórók több csatornás hangot biztosítanak, amely különösen fontos filmeknél és játékoknál a valósághű hangélmény érdekében.",
                  "Hangos bemutatók: Ideálisak prezentációkhoz, találkozókhoz és eseményekhez, ahol a hangot több embernek is hallania kell.",
                ]}
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
                description="Élje át a lenyűgöző képminőséget prémium monitorainkkal, amelyek kiváló felbontást és gyors válaszidőt kínálnak. Az IPS technológia széles betekintési szögeket és élénk színeket biztosít, míg a nagy frissítési frekvencia sima képet garantál még gyors jeleneteknél is. A vékony keret és az állítható állvány modern és elegáns megjelenést kölcsönöz, amely fehér és fekete kivitelben is elérhető."
                price="75,000"
                use={[
                  "Vizuális kijelző: A számítógépes tartalmak megjelenítésére szolgál, beleértve a szövegeket, képeket, videókat és játékokat.",
                  "Felbontás és méret: A nagyobb és jobb felbontású monitorok részletgazdagabb képet nyújtanak, ami különösen fontos a grafikai tervezés, videószerkesztés és játékok esetén.",
                  "Többfeladatos munkavégzés: Lehetőséget biztosít a több alkalmazás egyidejű megjelenítésére és kezelésére, ami növeli a produktivitást.",
                ]}
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
  const [cart, setCart] = useState({
    eger: 0,
    billentyuzet: 0,
    fejhallgato: 0,
    hangszoro: 0,
    monitor: 0,
  });

  return (
    <CartCtx.Provider value={{ cart, setCart }}>
      <Favicon url={`${process.env.PUBLIC_URL}/img/branding.png`} />
      <Navbar />
      <Outlet />
      <Footer />
    </CartCtx.Provider>
  );
};

export { CartCtx, App };
