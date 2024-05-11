import React from "react";

export default function HomePage() {
  return (
    <section id="hero" className="h-[100vh] flex justify-evenly items-center">
      <div>
        <div>
          <h2 className="text-primary text-5xl font-bold">
            Ne elégedj meg a középszerűvel.
          </h2>
          <h1 className="text-white text-9xl font-black py-3">FRUITFULTECH</h1>
          <h2 className="text-primary text-5xl font-bold">
            Lépj át a következő szintre.
          </h2>
        </div>
        <div className="mt-5 flex gap-x-3">
          <button className="btn-shadow rounded-full py-2 px-5 bg-accent hover:bg-accent-hover font-medium text-xl">
            Felfedezés
          </button>
          <button className="btn-shadow text-accent rounded-full py-2 px-5 border-solid border-2 border-accent font-medium text-xl hover:bg-accent hover:text-[#000]">
            Legújabb termékek
          </button>
        </div>
      </div>
      <div>
        <img
          className="min-h-[50vh]"
          src={`${process.env.PUBLIC_URL}/img/products/headphones.png`}
          alt="Headphones"
          title="Headphones"
          draggable="false"
        />
      </div>
    </section>
  );
}
