import React, { useState } from "react";

import RatingCard from "@/components/RatingCard";
import Comment from "@/components/Comment";
import AllColorStatus from "@/components/AllColorStatus";
import Navbar from "@/components/Navbar";
import { jwtContext } from "@/jwtContext";
import { JWTPayload } from "jose";

export default function Profile() {
  return (
    <>
      <Navbar />
      <jwtContext.Consumer>
        {(jwt) => {
          if (jwt != null) return <h1>Welcome {jwt?.username}</h1>;
        }}
      </jwtContext.Consumer>
    </>
  );
}
