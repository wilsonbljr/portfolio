import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextIntlProvider } from "next-intl";
import { Roboto } from "@next/font/google";
import Footer from "../components/Footer";
import Script from "next/script";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  variable: "--font-lato",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.TAG}`}
      ></Script>
      <Script id="google-tag-manager">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', ${process.env.TAG});
        `}
      </Script>
      <NextIntlProvider messages={pageProps.messages}>
        <main
          className={`${roboto.variable} font-sans min-h-screen bg-slate-800 text-gray-200 relative`}
        >
          <Component {...pageProps} />
          <Footer />
        </main>
      </NextIntlProvider>
    </>
  );
}
