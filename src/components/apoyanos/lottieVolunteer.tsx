"use client";

import Lottie from "lottie-react";
import volunteerAnimation from "@/lottie/Volunteer.json";

interface VolunteerIconProps {
  lottieRef: React.RefObject<any>;
}

export default function VolunteerIcon({ lottieRef }: VolunteerIconProps) {
  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={volunteerAnimation}
      loop={false}
      autoplay={false}
      className=" w-full max-w-80 h-full"
    />
  );
}