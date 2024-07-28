import React from "react";
import Image from "next/image";
import Button from "./Buttons.tsx/Button";

const SingleCard = ({image, title, description}: {image: any, title: string, description: string}) => {
  return (
    <main className="rounded-[40px] w-[300px] bg-gradient-to-b shadow-2xl from-p3 to-p4 flex flex-col justify-center items-center px-[36px] py-[26px] gap-[30px] tracking-wider">
      <div>
        <Image
          src={image}
          alt="img1"
          className="rounded-full shadow-2xl"
        ></Image>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 ">
        <div className="text-2xl font-semibold border-b-2 border-w2/30 pb-5">{title}</div>
        <div className="text-[10px]">{description}</div>
      </div>
      <Button text="TRY IT NOW"></Button>
    </main>
  );
};

export default SingleCard;
