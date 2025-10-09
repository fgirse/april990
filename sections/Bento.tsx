import Flens from "../components/Cloudinary/flens";
import WineIcon from "../components/Cloudinary/weinIcon";   
import CocktailIcon from "../components/Cloudinary/cocktailIcon";
import { Grid, Container } from "lucide-react";
import Image from "next/image";
import LogoNeu from "../public/LogoNeu.png";
export default function Example() {
  return (
  <div className="bento-grid">
  <div className="grid-item-overlay-1760013118838">
    <h1 className=" headingA text-yellow-500 text-3xl lg:text-7xl text-center py-3">Gastlichkeit ist unsere Philosophie</h1>
  </div>
  <div className="grid-item-overlay-1760013135221">
    <div className="w-[10vw] h-[10vh] flex flex-col justify-center items-center">
      <Image src={LogoNeu} alt="Flensburger vom Fass" width={300} height={300} />
    </div>
   
  </div>
  <div className="grid-item-overlay-1760013142136"></div>
  <div className="grid-item-overlay-1760013155607"></div>
  <div className="grid-item-overlay-1760013180471"></div>
  <div className="grid-item-overlay-1760013209391"></div>
  <div className="grid-item-overlay-1760013220038"></div>
  <div className="grid-item-overlay-1760013225572"></div>
  <div className="grid-item-overlay-1760013277878"></div>
</div>
);
}
