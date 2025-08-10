import React from "react";
import Image from "next/image";

import { heroDetails } from "@/data/hero";
import ButtonDaftar from "./ButtonDaftar";
import ButtonTanya from "./ButtonTanya";


const Hero: React.FC = () => {
  return (
    <>
      <section id="hero" className="relative isolate">

        {/* <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-20 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]"></div> */}

        <div className="flex flex-col sm:flex-row items-center justify-between pt-20">
          <div className="text-center sm:text-left z-40">
            <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">
              {/* {heroDetails.heading} */}
              Ngerti <span className="text-[#D71313] underline italic">Inggris</span>, Buka Peluang Lebih!
            </h1>
            <p className="mt-4 text-foreground max-w-lg">
              {heroDetails.subheading}
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row items-center sm:gap-4 w-fit mx-auto sm:mx-0">
              <ButtonDaftar />
              <ButtonTanya />
            </div>
          </div>
          <div>
            <Image
              src={heroDetails.centerImageSrc}
              width={384}
              height={340}
              quality={100}
              sizes="(max-width: 768px) 100vw, 384px"
              priority={true}
              unoptimized={true}
              alt="app mockup"
              className="relative mt-12 md:mt-16 mx-auto z-10"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
