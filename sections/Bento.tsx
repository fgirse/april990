import HeroImage from "../components/Cloudinary/flens";
import WineIcon from "../components/Cloudinary/weinIcon";   
import CocktailIcon from "../components/Cloudinary/cocktailIcon";
import { Grid, Container } from "lucide-react";
import Image from "next/image";
import LogoNeu from "../public/LogoNeu.png";

export default function Example() {
  return (
  <div className="bento-grid">
  <div className="grid-item-overlay-1760057571577">
    <h1 className="headingA text-yellow-500 lg:text-9xl ">Gastlichkeit ist unsere Philosophie</h1>
  </div>
  <div className="grid-item-overlay-1760057632942">
  <div className="mt-[3vh] flex flex-col items-center space-x-4 justify-center h-[70vh]w-[9]">
      <HeroImage />
</div>
</div>
  <div className="grid-item-overlay-1760057666155">
    <div className="mt-[3vh] flex flex-col items-center space-x-4 justify-center h-[70vh]w-[9]">
      <Image src={LogoNeu} alt="LogoNeu" width={500} height={200} />
    </div>
  </div>
  <div className="grid-item-overlay-1760057846834"></div>
  <div className="grid-item-overlay-1760057851572"></div>
  <div className="grid-item-overlay-1760057865523"></div>
  <div className="grid-item-overlay-1760057891398"></div>
  <div className="grid-item-overlay-1760057918272"></div>
  <div className="grid-item-overlay-1760057942145"></div>
  <div className="grid-item-overlay-1760057948843"></div>
  <div className="grid-item-overlay-1760057999319"></div>
  <div className="grid-item-overlay-1760058011364"></div>
  <div className="grid-item-overlay-1760058017913"></div>
  <div className="grid-item-overlay-1760058026843"></div>
  <div className="grid-item-overlay-1760058050498"></div>
  <div className="grid-item-overlay-1760058061196"></div>
  <div className="grid-item-overlay-1760058069825"></div>
</div>
  )}