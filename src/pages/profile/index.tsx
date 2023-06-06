import React, { useContext, useState } from "react";

import RatingCard from "@/components/RatingCard";
import Comment from "@/components/Comment";
import AllColorStatus from "@/components/AllColorStatus";
import Navbar from "@/components/Navbar";
import { jwtContext } from "@/jwtContext";
import { JWTPayload } from "jose";
import { AppContext } from "@/context/context";

export default function Profile() {
  const {
    state: {
      jwt: { token, payload },
    },
    dispatch,
  } = useContext(AppContext);
  return (
    <>
      <Navbar />
      <h1>Welcome {payload?.username as string}</h1>;
    </>
  );
}
  ``