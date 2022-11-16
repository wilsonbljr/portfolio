import Head from "next/head";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Timeline from "../components/Timeline";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wilson Bley</title>
      </Head>
      <Header />
      <Landing />
      <Timeline />
    </>
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
