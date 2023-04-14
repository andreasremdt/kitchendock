import { useState } from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PreferenceContextProvider from "@/contexts/preference-context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const [client] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <PreferenceContextProvider>
        <Component {...pageProps} />
      </PreferenceContextProvider>
    </QueryClientProvider>
  );
}
