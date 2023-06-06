// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import React, { useContext, useEffect, ReactNode } from "react";
import { AppContext, AppProvider } from "@/context/context";
import Cookies from "js-cookie";
import { getJWT } from "@/auth/auth";
import { Types } from "@/context/jwt/reducer";

interface IProps {
    children?: ReactNode
}

export default function AppWrapper({ children }: IProps) {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    const access_token = Cookies.get("userJWT");
    if (access_token != null) {
      getJWT(access_token).then((jwtPayload) => {
        dispatch({
          type: Types.SetJwt,
          payload: {
            token: access_token,
            jwtPayload,
          },
        });
      });
    }
  }, []);

  return <>{children}</>;
}
