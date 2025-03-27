import Header from "@/components/Header";
import Cuerpo1 from "@/components/Cuerpo1";
import Cuerpo2 from "@/components/Cuerpo2";
import Cuerpo3 from "@/components/Cuerpo3"
import Cuerpo4 from "@/components/Cuerpo4"
import Cuerpo5 from "@/components/Cuerpo5"
import Cuerpo6 from "@/components/Cuerpo6"
import Cuerpo7 from "@/components/Cuerpo7"
import Cuerpo8 from "@/components/Cuerpo8"
import Cuerpo9 from "@/components/Cuerpo9"
import Cuerpo10 from "@/components/Cuerpo10"
import Carrusel1 from "@/components/Carrusel1"
import Carrusel2 from "@/components/Carrusel2"
import Footer from "@/components/Footer"
import "./globals.css";

export default function Home() {
  return (
    <div className="w-full">
      <Header/>
      <Cuerpo1/>
      <Cuerpo2/>
      <Carrusel1/>
      <Cuerpo3/>
      <Cuerpo4/>
      <Carrusel2/>
      <Cuerpo5/>
      <Cuerpo6/>
      <Cuerpo7/>
      <Cuerpo8/>
      <Cuerpo9/>
      <Cuerpo10/>
      <Footer/>
    </div>
  );}