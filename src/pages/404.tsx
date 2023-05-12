import Head from "@/components/HeadSetter";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
// import colors from "@/utils/data.js";
import React, { useState } from "react";
import { QueryClient, useQuery, useQueryClient } from "react-query";
import axios from "axios";

export default function Error404() {
  return (
    <>
      <p>404</p>
    </>
  );
}
