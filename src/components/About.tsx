import React from "react";
import Image from "next/image";
import about from "@/assets/About.png";
import Button from "./Buttons.tsx/Button";

const About = () => {
  return (
    <section className="text-mywhite flex justify-center items-center mt-[100px] tracking-wider">
      <div className="w-1/2">
        <Image src={about} alt="about"></Image>
      </div>

      <div className="w-1/2 flex flex-col justify-start items-start gap-10">
        <div className="flex flex-col justify-center items-start gap-4">
          <div className="text-3xl font-semibold">ABOUT</div>
          <div className="text-3xl">HYDRA VR</div>
        </div>
        <div>
          Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis
          rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum.
          Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at
          risus viverra adipiscing at in. Mattis aliquam faucibus purus in
          massa. Est placerat in egestas erat imperdiet sed. Consequat semper
          viverra nam libero justo laoreet sit amet. Aliquam etiam erat velit
          scelerisque in dictum non consectetur a. Laoreet sit amet cursus sit
          amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha retra
          diam sit amet nisl suscipit adipiscing bibendum. Leo a diam
          sollicitudi n tempor.
        </div>
        <div>
          <Button text="LET'S GET IN TOUCH"></Button>
        </div>
      </div>
    </section>
  );
};

export default About;
