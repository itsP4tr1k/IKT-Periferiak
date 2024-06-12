import { useContext } from "react";
import { CartCtx } from "../App";

function Item({ title, image, amount }) {
  if (amount > 0) {
    return (
      <li className="bg-[#252525] rounded-lg shadow-sm bg-opacity-15 p-5 max-w-[95vw] sm:max-w-[90vw] lg:max-w-[80vw] xl:max-w-[65vw] mx-auto flex flex-wrap text-center justify-evenly items-center mb-3">
        <img
          className="max-h-[35vh] max-w-[45vw]"
          src={`${process.env.PUBLIC_URL}/img/products/${image}.png`}
          alt={image}
        />
        <div className="mt-3">
          <h1 className="font-bold text-3xl">{title}</h1>
          <h2 className="text-2xl lg:text-start">Mennyiség: {amount}</h2>
        </div>
      </li>
    );
  }
}

export default function KosarPage() {
  const { cart } = useContext(CartCtx);

  let itemSum = 0;

  Object.values(cart).forEach((e) => {
    itemSum = itemSum + Number(e);
  });

  return (
    <div className="min-h-[80vh] mt-[100px] text-white">
      {itemSum < 1 ? (
        <div className="min-h-[80vh] mt-[-100px] flex justify-center items-center">
          <h1 className="text-5xl">A kosár tartalma üres.</h1>
        </div>
      ) : (
        <ul>
          <Item
            image="eger"
            title="FruitfulTech Heavenly Extralight v2"
            amount={cart["eger"]}
          />
          <Item
            image="billentyuzet"
            title="FruitfulTech Typewriter - Cherry MX White"
            amount={cart["billentyuzet"]}
          />
          <Item
            image="fejhallgato"
            title="FruitfulTech H40NC"
            amount={cart["fejhallgato"]}
          />
          <Item
            image="hangszoro"
            title="FruitfulTech StereoX 3"
            amount={cart["hangszoro"]}
          />
          <Item
            image="monitor"
            title="FruitfulTech Light Vision - 360Hz 1ms IPS"
            amount={cart["monitor"]}
          />
        </ul>
      )}
    </div>
  );
}
