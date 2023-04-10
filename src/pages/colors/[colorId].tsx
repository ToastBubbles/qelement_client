import Head from "@/components/HeadSetter";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import colors from "@/utils/data.js";
import React, { useState } from "react";

const ColorId = () => {
  const router = useRouter();
  const { colorId } = router.query;

  return colorId;
};

export default function Home() {
  let color = colors.find((x) => x.Lid == ColorId());
  let hex = "#" + color?.color;
  return (
    <>
      <Head title={color?.BLName} />
      <Navbar />
      <div className="colorTop">
        <div className="colorName">
          {color?.BLName.length == 0 ? color.LName : color?.BLName}
        </div>
        <div className="hexbar" style={{ backgroundColor: hex }}>
          {hex}
        </div>
      </div>
      <div className="fake-hr"></div>
    </>
  );
}
