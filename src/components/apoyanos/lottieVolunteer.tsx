"use client";

import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import type { RefObject } from "react";
import volunteerAnimation from "@/lottie/Volunteer.json";

interface VolunteerIconProps {
  lottieRef: RefObject<LottieRefCurrentProps | null>;
}

export default function VolunteerIcon({ lottieRef }: VolunteerIconProps) {
  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={volunteerAnimation}
      loop={false}
      autoplay={false}
      className="w-full max-w-80 h-full"
    />
  );
}
