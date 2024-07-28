import React from "react";
import Image from "next/image";
import Button from "./Buttons.tsx/Button";
import arrow from "@/assets/right arrow.png";
import rectangle from "@/assets/Rectangle 4.png";
import hero from "@/assets/Mask group.png";
import map from "@/assets/Location-Icon.png"
import phone from "@/assets/shape.png"
import message from "@/assets/message.png"

const HeroSection = () => {
  return (
    <main>
      <section className="flex justify-center items-center pt-12">
        <div className="w-1/2 flex flex-col justify-center items-start gap-9 text-mywhite">
          <div className="flex flex-col gap-1 text-5xl">
            <div>
              <span className="text-p2">Dive</span> Into The Depths
            </div>
            <div>
              Of <span className="text-p2">Virtual Reality</span>
            </div>
          </div>
          <div className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae.
          </div>
          <div className="flex justify-center items-center gap-10">
            <Button text="BUILD YOUR WEBSITE"></Button>
            <Image src={arrow} alt="arrow"></Image>
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-center">
          <div className="relative">
            <Image src={hero} alt="hero"></Image>
            <Image
              src={rectangle}
              alt="bg"
              className="absolute top-0 right-0 scale-105"
            ></Image>
          </div>
        </div>
      </section>
      
      <section className="w-full bg-gradient-to-b shadow-2xl from-p3 to-p4 rounded-[90px] mt-[100px] text-mywhite tracking-wider flex justify-between items-center py-6 px-8 divide-x-2 divide-w2/30">
        <div className="flex justify-center items-center w-[370px] h-[100px]">
            <div><Image src={map} alt="map"></Image></div>
            <div>
                <div className="text-[16px] font-semibold">Pay Us a Visit</div>
                <div className="text-[10px]">Union St, Seattle, WA 98101, United States</div>
            </div>
        </div>
        <div className="flex justify-center items-center gap-4 w-[370px] h-[100px]">
            <div><Image src={phone} alt="phone"></Image></div>
            <div>
                <div className="text-[16px] font-semibold">Give Us a Call</div>
                <div className="text-[10px]">(110) 1111-1010</div>
            </div>
        </div>
        <div className="flex justify-center items-center gap-4 w-[370px] h-[100px]">
            <div><Image src={message} alt="message"></Image></div>
            <div>
                <div className="text-[16px] font-semibold">Send Us a Message</div>
                <div className="text-[10px]">Contact@HydraVTech.com</div>
            </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
