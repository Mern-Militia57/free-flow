"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiRightArrow } from "react-icons/bi";
import { PiNumberCircleFiveFill, PiNumberCircleOneFill } from "react-icons/pi";
import { PiNumberCircleTwoFill } from "react-icons/pi";
import { PiNumberCircleThreeFill } from "react-icons/pi";
import { PiNumberCircleFourFill } from "react-icons/pi";

const GiglineTag = ({ gives1, gives2, gives3, gives0 }) => {
  const [match, setmatch] = useState(false);
  const [match2, setmatch1] = useState(false);
  const [match3, setmatch2] = useState(false);
  const [match4, setmatch3] = useState(false);

  useEffect(() => {
    const matc1 = gives0;
    const matc2 = gives1;
    const matc3 = gives2;
    const matc4 = gives3;

    setmatch(matc1);
    setmatch1(matc2);
    setmatch2(matc3);
    setmatch3(matc4);
  }, [gives0, gives1, gives2, gives3]);
  const history = useRouter();

  return (
    <>
      <div className="flex justify-center border p-3">
        <button
          style={{ alignItems: "center" }}
          className={`mx-2 font-semibold flex ${match && "text-success"} `}
          onClick={() =>
            history.push("/manage_gigs/overviews")
          }
        >
          <PiNumberCircleOneFill
            className={`text-3xl mx-2 ${
              match ? "text-success" : "text-gray-500"
            }  `}
          />
          Over-View
          <BiRightArrow
            className={`text-3xl mx-2 ${
              match ? "text-success" : "text-gray-500"
            } `}
          />
        </button>
        <button
          style={{ alignItems: "center" }}
          className={`mx-2 font-semibold flex ${
            match2 ? "text-success" : "text-gray-500"
          }`}
          onClick={() =>
            history.push("/manage_gigs/price")
          }
        >
          <PiNumberCircleTwoFill className="text-3xl mx-2" />
          Price
          <BiRightArrow
            className={`text-2xl mx-1  ${
              match2 ? "text-success" : "text-gray-500"
            }`}
          />
        </button>
        <button
          style={{ alignItems: "center" }}
          className={`mx-2 font-semibold flex ${
            match3 ? "text-success" : "text-gray-500"
          }`}
          onClick={() =>
            history.push("/manage_gigs/description")
          }
        >
          <PiNumberCircleThreeFill
            className={`text-3xl mx-2 ${
              match3 ? "text-success" : "text-gray-500"
            }  `}
          />
          Description
          <BiRightArrow
            className={`text-2xl mx-1  ${
              match3 ? "text-success" : "text-gray-500"
            }`}
          />
        </button>
        <button
          style={{ alignItems: "center" }}
          className={`mx-2 font-semibold flex ${
            match4 ? "text-success" : "text-gray-500"
          }`}
          onClick={() =>
            history.push("/manage_gigs/gallary")
          }
        >
          <PiNumberCircleFourFill
            className={`text-3xl mx-2 ${
              match4 ? "text-success" : "text-gray-500"
            }  `}
          />
          Gallary
          <BiRightArrow
            className={`text-2xl mx-1  ${
              match4 ? "text-success" : "text-gray-500"
            }`}
          />
        </button>
     
      </div>
    </>
  );
};

export default GiglineTag;
