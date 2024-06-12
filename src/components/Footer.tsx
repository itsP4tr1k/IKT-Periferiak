import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#252525] py-3 flex justify-evenly flex-wrap md:flex-nowrap items-center text-white">
      <div className="flex items-center justify-center w-[95vw] md:w-fit">
        <img
          className="max-h-[25vh]"
          src={`${process.env.PUBLIC_URL}/img/branding.png`}
          alt="FruitfulTech"
        />
      </div>
      <div className="w-[95vw] md:w-fit text-center md:text-left">
        <h1 className="font-bold text-3xl pb-1">Elérhetőség</h1>
        <ul>
          <li className="opacity-75 hover:opacity-100 cursor-pointer">
            8000 Székesfehérvár, Pozsonyi út 6.
          </li>
          <li className="opacity-75 hover:opacity-100 cursor-pointer">
            support@fruitfultech.com
          </li>
          <li className="opacity-75 hover:opacity-100 cursor-pointer">
            +36 (44) 444 4444
          </li>
        </ul>
      </div>
      <div className="w-[95vw] md:w-fit text-center md:text-left py-2">
        <h1 className="font-bold text-3xl pb-1">Üzleteink</h1>
        <ul>
          <li className="opacity-75 hover:opacity-100 cursor-pointer">
            Székesfehérvár, Nyíri út 32.
          </li>
          <li className="opacity-75 hover:opacity-100 cursor-pointer">
            Budapest, Vörösmarty tér 4.
          </li>
          <li className="opacity-75 hover:opacity-100 cursor-pointer">
            Szeged, Vásárhelyi Pál utca 48.
          </li>
        </ul>
      </div>
    </div>
  );
}
