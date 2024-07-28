import React from "react";
import SingleCard from "./SingleCard";
import img1 from "@/assets/Mask group (1).png";
import img2 from "@/assets/Mask group (2).png";
import img3 from "@/assets/Mask group (3).png";
import img4 from "@/assets/Mask group (4).png";

const Why = () => {
  return (
    <section className="tracking-wider text-mywhite flex justify-center items-center flex-col mt-[100px] gap-10">
      <div className="flex flex-col justify-start items-center gap-4">
        <div className="text-3xl font-semibold">WHY BUILD</div>
        <div className="text-3xl font-thin">WITH HYDRA?</div>
      </div>

      <div className="flex justify-between items-center gap-5 w-full">
        <SingleCard
          image={img4}
          title="SIMULATION"
          description="Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
        ></SingleCard>
        <SingleCard
          image={img1}
          title="EDUCATION"
          description="Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
        ></SingleCard>
        <SingleCard
          image={img2}
          title="SELF-CARE"
          description="Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
        ></SingleCard>
        <SingleCard
          image={img3}
          title="OUTDOOR"
          description="Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
        ></SingleCard>
      </div>
    </section>
  );
};

export default Why;
