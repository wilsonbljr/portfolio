import Head from "next/head";
import { useRef } from "react";
import Landing from "../components/Landing";
import About from "../components/About";
import Timeline from "../components/Timeline";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <main className="max-w-[100vw] overflow-x-hidden">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <title>Wilson Bley</title>
        <meta name="title" content="Wilson Bley" />
        <meta
          name="description"
          content="Curriculum and portfolio of Wilson Bley Lipski Junior"
        />
      </Head>
      <Landing aboutRef={aboutRef} />
      <About ref={aboutRef} />
      <Timeline />
    </main>
  );
}

export async function getStaticProps(context: any) {
  const i18n = await import(`../i18n/${context.locale}.json`);

  return {
    props: {
      messages: { ...i18n },
    },
  };
}
