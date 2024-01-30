"use client";

import Image from "next/image";

import { CustomButton } from "@/components";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find Your Ideal Car Rental - Compare Rates and Save
        </h1>
        <p className="hero__subtitle">
          Enhance Your Car Rental Journey with Our Seamless and Effortless
          Booking System
        </p>
        <CustomButton
          title="Explore cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10 btn-hover-focus"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="hero"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
