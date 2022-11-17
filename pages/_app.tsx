import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextIntlProvider } from "next-intl";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  variable: "--font-lato",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <main
        className={`${roboto.variable} font-sans min-h-screen bg-slate-800 text-gray-200`}
      >
        <Component {...pageProps} />
      </main>
    </NextIntlProvider>
  );
}
