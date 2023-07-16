'use client'
import Image from 'next/image'
import Header from "@/app/components/header";
import Content from "@/app/components/content";
import News from "@/app/components/novedades";
import Promociones from "@/app/components/promociones";
import Footer from "@/app/components/footer";
import Notas from "@/app/components/notas";
import Carousel from "@/app/components/carousel";

export default function Home() {
  return (
      <main className="flex flex-col justify-between ">
          <Header/>
          <Content/>
          <Carousel />
          <News/>
          <Promociones/>
          <Notas/>
          <Footer/>
      </main>
  )
}
