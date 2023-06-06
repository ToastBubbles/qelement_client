// import "@/styles/globals.css";
import "@/styles/myStyles.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import React, { useEffect } from "react";
import { AppProvider } from "@/context/context";
import AppWrapper from "@/components/AppWrapper";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {}, []);

  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </QueryClientProvider>
    </AppProvider>
  );
}
