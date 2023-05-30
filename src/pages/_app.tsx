// import "@/styles/globals.css";
import "@/styles/myStyles.css";
import type { AppProps } from "next/app";
import { jwtContext } from "@/jwtContext";
import Cookies from "js-cookie";
import { importSPKI, jwtVerify, JWTPayload } from "jose";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import React, { useEffect, useState } from "react";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const [jwt, setJwt] = useState<JWTPayload | null>(null);

  async function getJWT() {
    const jwtBoi = Cookies.get("userJWT");

    const algorithm = "RS256";
    const spki = `-----BEGIN PUBLIC KEY-----
  MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAlT9HNfa+VXFuJ+apLiNz
  eIdx9KbAETY5cnOkxqYkwoZHRDGF4rocTLcvM7d3dCyOpWHd5b1t1B28m/vp1EMI
  egPvTl0aIobq7DFKQrXGcO/NGp8GtyvJLlPI3khxScopprRCJiGcc/ub1THkJ9eR
  a/YVfYJsoRzws6/Kf3EZ6quecCbMrO013B54ixuyMXfCNgdIEpakR7ue7EdN+4N/
  8bb6KBV8m8G/39SPDyOYoON2nYWeKpsTRB8Z31xqLMPT4H+UPF2/O7yr/YEq2Iqa
  i9MgVWxJARlC+RCtzTTg7/UE9fm7fQVSsvbwz7XR8bBWYZZrFD8duejIfNLCHbft
  /wIDAQAB
  -----END PUBLIC KEY-----`;
    const publicKey = await importSPKI(spki, algorithm);
    console.log(jwtBoi);

    // let result = null;
    if (jwtBoi !== null && jwtBoi != "null") {
      const result = await jwtVerify(jwtBoi as string, publicKey);
      setJwt(result.payload);
    } else {
      setJwt(null);
    }
  }

  useEffect(() => {
    getJWT();
    console.log(jwt);
  }, [jwt == null]);

  // /{ username: "tester321", id: 2, iat: 1685464768, exp: 1685468368 }
  return (
    <jwtContext.Provider value={jwt}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </jwtContext.Provider>
  );
}
