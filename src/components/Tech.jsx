import React from "react";

// import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 border border-white rounded-md cursor-pointer object-cover bg-purple-200'
         key={technology.name}>
          <img src={technology.icon} className='object-cover w-full h-full' />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
