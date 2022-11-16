import Head from "next/head";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import About from "../components/About";
import Timeline from "../components/Timeline";

export default function Home() {
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
      </Head>
      <Landing />
      <About />
      <Timeline />
      <Footer />
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
