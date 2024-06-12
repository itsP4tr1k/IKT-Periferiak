import { useState, useContext } from "react";
import { CartCtx } from "../App";
import { createMemoryRouter } from "react-router-dom";

function Star() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function ProductPage({
  image,
  title,
  subtitle,
  description,
  price,
  use,
}) {
  const { cart, setCart } = useContext(CartCtx);
  const [descriptionIsCollapsed, setDescriptionIsCollapsed] = useState(true);
  let descriptionShow = description;

  function toggleDescription() {
    setDescriptionIsCollapsed(!descriptionIsCollapsed);
  }

  if (descriptionIsCollapsed) {
    descriptionShow = description.split(".")[0] + ".";
  } else {
    descriptionShow = description;
  }

  return (
    <>
      <div className="mt-[100px] md:mt-0 min-h-[75vh] mb-3 flex items-center justify-center flex-wrap md:flex-nowrap">
        <div className="min-w-[80vw] md:min-w-[40vw] flex justify-center px-5">
          <img
            className="max-h-[35vh] md:max-h-[60vh]"
            src={`${process.env.PUBLIC_URL}/img/products/${image}.png`}
            alt={image}
          />
        </div>
        <div className="text-white min-w-[50vw] text-center md:text-left">
          <h1 className="text-5xl font-bold pt-2 md:pt-0">{title}</h1>
          <h2 className="text-xl opacity-50">{subtitle}</h2>
          <div className="flex items-center py-3 justify-center md:justify-start">
            <div className="text-[#ffd558] flex">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <p className="ps-1">5,00</p>
          </div>
          <p className="text-center sm:text-justify opacity-60 max-w-[90%] mx-auto md:mx-0 text-xl">
            {descriptionShow}
          </p>
          <button
            onClick={toggleDescription}
            className="mx-auto md:mx-0 pt-1 flex items-center gap-x-[1px] cursor-pointer hover:opacity-80 transition-all duration-200 ease-in-out"
          >
            {descriptionIsCollapsed ? (
              <>
                <p>Több</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </>
            ) : (
              <>
                <p>Kevesebb</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </>
            )}
          </button>
          <div className="flex items-center gap-x-5 pt-2 pb-3 justify-center md:justify-start">
            <div>
              <p className="opacity-60">Ár</p>
              <p className="font-medium text-xl">{price} HUF</p>
            </div>
            <div>
              <p className="opacity-60">Szín</p>
              <div className="flex gap-x-2">
                <div>
                  <div className="w-[32px] h-[32px] bg-[#000000] rounded-full border-[#ffffff60] border-2 cursor-pointer"></div>
                </div>
                <div>
                  <div className="w-[32px] h-[32px] bg-[#ffffff] rounded-full border-[#00000060] border-2 cursor-pointer"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-black flex items-center gap-x-[3px] justify-center md:justify-start">
            <button
              onClick={() => {
                setCart({
                  ...cart,
                  [image]: cart[image] + 1,
                });
              }}
              className="w-fit transition-all duration-200 ease-in-out rounded-tl-[2rem] rounded-bl-[2rem] rounded-tr-[5px] rounded-br-[5px] py-3 px-8 bg-accent hover:bg-accent-hover font-medium text-lg"
            >
              Kosárba
            </button>
            <button className="w-fit transition-all duration-200 ease-in-out rounded-tl-[5px] rounded-bl-[5px] rounded-tr-[2rem] rounded-br-[2rem] py-3 ps-3 pe-4 bg-accent hover:bg-accent-hover">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-7"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="text-white">
        <h1 className="font-bold text-5xl p-5 bg-[#1b1b1b] w-fit mx-auto text-center">
          Mire jó egy{" "}
          {title.split(" ")[title.split(" ").length - 1].toLowerCase()}?
        </h1>
        <ul
          id="productDescription"
          className="font-normal text-2xl mx-auto mt-5 mb-3 text-start"
        >
          <li className="mb-2">
            <strong>{use[0].split(":")[0] + ":"}</strong> Az egér segítségével a
            felhasználó irányíthatja a számítógépes kurzort, kattintásokkal és
            mozdulatokkal vezérelheti a különböző alkalmazásokat és funkciókat.
          </li>
          <li className="mb-2">
            <strong>{use[1].split(":")[0] + ":"}</strong> Különösen hasznos
            grafikai tervezés, játékok és más precíziós munkák esetén, ahol
            pontos kurzor mozgatás szükséges.
          </li>
          <li>
            <strong>{use[2].split(":")[0] + ":"}</strong> Lehetővé teszik az
            oldalak gördítését, valamint további funkciókhoz való gyors
            hozzáférést.
          </li>
        </ul>
      </div>
    </>
  );
}
