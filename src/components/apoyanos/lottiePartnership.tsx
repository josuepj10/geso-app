"use client";

import Lottie from "lottie-react";
import PartnershipAnimation from "@/lottie/Partnership.json";

interface PartnershipIconProps {
  lottieRef: React.RefObject<any>;
}

export default function PartnershipIcon({ lottieRef }: PartnershipIconProps) {
  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={PartnershipAnimation}
      loop={false}
      autoplay={false}
      className=" w-full max-w-80 h-full"
    />
  );
}