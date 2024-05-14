import React, { useEffect, useRef, useState } from "react";

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [fadeout, setFadeout] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const products = ["keyboard", "monitor", "mouse", "speakers", "headphone"];
  const random = useRef(Math.floor(Math.random() * 4))

  useEffect(() => {
    setInterval(() => {
      setIndex((prev) => (prev == products.length - 1 ? 0 : prev + 1));
    }, 3500);
  }, []);

  return (
    <section
      id="hero"
      className="h-[90vh] flex justify-evenly md:items-center flex-wrap-reverse text-center md:text-left"
    >
      <div className="items-start">
        <div>
          <h2 className="text-primary text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold">
            Ne elégedj meg a középszerűvel.
          </h2>
          <h1 className="text-white text-4xl 2xs:text-5xl xs:text-6xl sm:text-7xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black py-3">
            FRUITFULTECH
          </h1>
          <h2 className="text-primary text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold">
            Lépj át a következő szintre.
          </h2>
        </div>
        <div className="mt-5 flex gap-x-3 gap-y-2 justify-center md:justify-start flex-wrap xs:flex-nowrap">
          <button className="w-[85vw] xs:w-fit transition-all duration-200 ease-in-out btn-shadow rounded-full py-2 px-5 bg-accent hover:bg-accent-hover font-medium text-xl">
            Felfedezés
          </button>
          <button className="w-[85vw] xs:w-fit transition-all duration-200 ease-in-out btn-shadow text-accent rounded-full py-2 px-5 border-solid border-2 border-accent font-medium text-xl hover:bg-accent hover:text-[#000]">
            Legújabb termékek
          </button>
        </div>
      </div>
        <img
          onMouseMove={(e) => {
            const rect = document
              .getElementById("productImage")
              .getBoundingClientRect();
            const x = Math.round(e.clientX - rect.left);
            const y = Math.round(e.clientY - rect.top);
            setX(x);
            setY(y);
          }}
          onMouseLeave={() => {
            setFadeout(true);

            if (y > 0) {
              setY(0);
            }

            if (x > 0) {
              setX(0);
            }

            setTimeout(() => setFadeout(false), 250);
          }}
          id="productImage"
          style={{ transform: `skewX(${x / 80}deg) skewY(${y / 150}deg)` }}
          className={`z-[1] ${fadeout && "transition ease-out duration-250"} max-w-[35vw] hidden md:block`}
          src={`${process.env.PUBLIC_URL}/img/products/${products[index]}.png`}
          draggable="false"
        />
    </section>
  );
}
