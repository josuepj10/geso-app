"use client";

import Lottie from "lottie-react";
import HighFiveAnimation from "@/lottie/HighFive.json";

interface HighFiveIconProps {
  lottieRef: React.RefObject<any>;
}

export default function HighFiveIcon({ lottieRef }: HighFiveIconProps) {
  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={HighFiveAnimation}
      loop={false}
      autoplay={false}
      className=" w-full max-w-80 h-full"
    />
  );
}