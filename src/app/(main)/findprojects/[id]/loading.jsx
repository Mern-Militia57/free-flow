"use client";
import React from "react";
import Lottie from "lottie-react";
import spinnerfun from "../../../../Components/LottieAnimation/spinnerjsonFiles.json";

export default function Loading() {
  return (
    <>
      <Lottie
        className="w-5/12 mx-auto"
        animationData={spinnerfun}
        loop={true}
      />
    </>
  );
}
