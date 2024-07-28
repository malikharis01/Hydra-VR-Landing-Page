import React from "react";
import Image from "next/image";
import process from "@/assets//Process-Section.png"

const HowWeBuild = () => {
  return (
    <section className="tracking-wider text-mywhite flex justify-center items-center flex-col mt-[60px] gap-12">
      <div className="flex flex-col justify-start items-center gap-4">
        <div className="text-3xl font-semibold">HOW WE BUILD</div>
        <div className="text-3xl font-thin">WITH HYDRA VR?</div>
      </div>
      <Image src={process} alt="process"></Image>
    </section>
  );
};

export default HowWeBuild;
