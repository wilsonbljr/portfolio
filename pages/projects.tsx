import Head from "next/head";
import { useTranslations } from "next-intl";
import ProjectCard from "../components/ProjectCard";
import { IconEnum } from "../lib/utils/iconUtils";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("Projects");

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
        <title>Wilson Bley - Projects</title>
      </Head>
      <div className="flex justify-center items-center min-h-[calc(100vh-40px)] flex-col">
        <div className="container">
          <h1 className="text-amber-400 font-bold tracking-wider text-3xl mb-2 mt-8 text-center">
            {t("title")}
          </h1>
        </div>
        <ul className="flex flex-wrap flex-col lg:flex-row lg:gap-5">
          <li>
            <ProjectCard
              title={t("portfolio.title")}
              description={t("portfolio.description")}
              date={t("portfolio.date")}
              stack={[
                IconEnum.TypeScript,
                IconEnum.HTML,
                IconEnum.Next,
                IconEnum.TailWind,
              ]}
            />
          </li>
          <li>
            <ProjectCard
              title={t("team_makr.title")}
              description={t("team_makr.description")}
              date={t("team_makr.date")}
              stack={[
                IconEnum.JavaScript,
                IconEnum.TypeScript,
                IconEnum.Express,
                IconEnum.HTML,
                IconEnum.CSS,
                IconEnum.Docker,
                IconEnum.MySQL,
              ]}
            />
          </li>
          <li>
            <ProjectCard
              title={t("api_spring.title")}
              description={t("api_spring.description")}
              date={t("api_spring.date")}
              stack={[IconEnum.Java, IconEnum.Spring, IconEnum.MySQL]}
            />
          </li>
        </ul>
        <Link
          href="/"
          className="px-5 py-2 mt-5 bg-slate-700 rounded-md font-semibold hover:bg-slate-500 hover:text-amber-400 hover:cursor-pointer"
        >
          {t("go_back")}
        </Link>
      </div>
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
