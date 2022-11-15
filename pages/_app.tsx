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
        className={`${roboto.variable} font-sans bg-gray-50 text-gray-900 min-h-screen dark:bg-slate-800 dark:text-gray-200`}
      >
        <Component {...pageProps} />
      </main>
    </NextIntlProvider>
  );
}
