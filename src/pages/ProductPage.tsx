import React from "react";

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
}) {
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <div className="min-w-[50vw] flex justify-center">
        <img
          src={`${process.env.PUBLIC_URL}/img/products/${image}.png`}
          alt={image}
        />
      </div>
      <div className="text-white">
        <h1 className="text-5xl font-bold">{title}</h1>
        <h2 className="text-xl opacity-50">{subtitle}</h2>
        <div className="flex items-center py-3">
          <div className="text-[#ffd558] flex">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p className="ps-1">5,00</p>
        </div>
        <p className="text-justify opacity-60 max-w-[70%]">{description}</p>
        <div className="flex items-center gap-x-5 pt-2 pb-3">
          <div>
            <p className="opacity-60">Ár</p>
            <p className="font-medium text-xl">{price} HUF</p>
          </div>
          <div>
            <p className="opacity-60">Szín</p>
            <div className="flex gap-x-2">
              <div>
                <div className="w-[32px] h-[32px] bg-[#000000] rounded-full border-[#ffffff60] border-2"></div>
              </div>
              <div>
                <div className="w-[32px] h-[32px] bg-[#ffffff] rounded-full border-[#00000060] border-2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-black flex items-center gap-x-1">
          <button className="w-[85vw] xs:w-fit transition-all duration-200 ease-in-out btn-shadow rounded-tl-[2rem] rounded-bl-[2rem] rounded-tr-[10px] rounded-br-[10px] py-2 px-5 bg-accent hover:bg-accent-hover font-medium text-xl">
            Kosárba
          </button>
          <button className="w-[85vw] xs:w-fit transition-all duration-200 ease-in-out btn-shadow rounded-tl-[10px] rounded-bl-[10px] rounded-tr-[2rem] rounded-br-[2rem] py-2 ps-2 pe-3 bg-accent hover:bg-accent-hover">
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
  );
}
