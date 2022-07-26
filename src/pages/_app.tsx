// import '../styles/globals.css'
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../createEmotionCache";
import Head from "next/head";
import theme from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FirebaseContext, useUserDataFirebase } from "@/firebase";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const queryClient = new QueryClient();
  const userData = useUserDataFirebase();

  return (
    <CacheProvider value={emotionCache}>
      <QueryClientProvider client={queryClient}>
        <FirebaseContext.Provider value={userData}>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </FirebaseContext.Provider>
      </QueryClientProvider>
    </CacheProvider>
  );
}

export default MyApp;
