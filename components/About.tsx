import { useTranslations } from "next-intl";

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  const t = useTranslations("About");

  return (
    <div className="flex items-center flex-col py-10 px-5">
      <div className="container">
        <h3 className="text-amber-400 font-bold tracking-wider text-3xl mb-10">
          {t("title")}
        </h3>
        <div className="px-5">
          <p>{t("about")}</p>
          <p>{t("about_2")}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
