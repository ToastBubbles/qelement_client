import { similarColor } from "@/pages/colors/[colorId]";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import { color } from "../interfaces/general";

interface IProps {
  similarColors: similarColor[];
}

function SimilarColorBanner({ similarColors }: IProps) {
  return (
    <>
      <div className="simBanner">
        <div className="simBannerText">This color is similar to:</div>
        {similarColors.length > 0 &&
          similarColors.map((color) => {
            //   console.log(color.colorId2);
            const thisColor = getSimilarColorData(color.colorId2);

            return (
              <Link
                href={"/colors/" + thisColor?.id}
                className="flag flag-spacer"
                style={{ backgroundColor: "#" + thisColor?.hex }}
              >
                {thisColor?.bl_name.length == 0
                  ? thisColor?.tlg_name
                  : thisColor?.bl_name}
              </Link>
            );
          })}
        {/* <div>{similarColors.length}</div> */}
      </div>
    </>
  );
}

function getSimilarColorData(cId: number): color | undefined {
  const router = useRouter();
  const {
    data: scolData,
    isLoading: scolIsLoading,
    error: scolError,
  } = useQuery({
    queryKey: `color${cId}`,
    queryFn: () => axios.get<color>(`http://localhost:3000/color/${cId}`),
    enabled: router.isReady,
    retry: false,
  });
  return scolData?.data;
}

export default SimilarColorBanner;
