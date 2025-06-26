import React from "react";
import Image from "next/image";

import { heroDetails } from "@/data/hero";
import ButtonDaftar from "./ButtonDaftar";
import ButtonTanya from "./ButtonTanya";
import Stats from "./Stats";

const Hero: React.FC = () => {
  return (
    <>
      <section id="hero" className="relative isolate">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-20"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.0625rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-100 to-yellow-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-20 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]"></div>

        <div className="flex flex-col sm:flex-row items-center justify-center pt-20">
          <div className="text-center sm:text-left z-40">
            <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">
              {heroDetails.heading}
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
        <Stats />
      </section>
    </>
  );
};

export default Hero;
