"use client"
import { useState, useEffect } from "react";
import Form from "./form";

const Contact = () => {


  return (
    <section className="mx-[30px] lg:mx-[76px] lg:mt-[150px]">
      <div className="flex flex-col items-center gap-[35px] md:gap-[25px]">
        <h3
          className={`font-medium text-[#FFFFFF99] text-lg text-center max-w-[320px] md:max-w-[992px] md:text-[25px] mmd:leading-[37.5px]`}
        >
          I can help you design, improve or build the product experience for
          your new or existing products. Feel free to get in touch with me.
        </h3>
        <h1 className="font-clashbold font-semibold text-xl text-white md:text-[60px] md:leading-[73.8px]">
          Do You Have Any Ideas?
        </h1>

        <p className="flex items-center font-semibold text-[15px] leading-[22.5px] md:text-[20px] md:leading-[30px] text-[#FFFFFF99]">
          SAY HELLO! <small className={`animate-bounce`}>👋</small>
        </p>
      </div>
     <Form/>
    </section>
  );
};

export default Contact;
