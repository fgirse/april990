import { cardProps } from "../../types";
import Image from "next/image";

interface cardInterface {
  card: cardProps;
}

const Card = ({ card }: cardInterface) => {
  return (
    <div className="card">
      <div
        className="absolute w-full h-[3px] top-0 left-0"
        style={{ backgroundColor: `${card.color}` }}
      ></div>
      <h2 className="text-xl font-semibold text-neutral-800">{card.title}</h2>
      <p className="mt-1 text-sm leading-[22px]">{card.content}</p>
      <div className="relative mt-8 w-14 lg:w-16 h-14 lg:h-16 self-end">
        <Image
          src={card.img}
          alt="card logo"
          fill
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Card;
