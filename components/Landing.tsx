import { useTranslations } from "next-intl";
import Github from "../public/github.svg";
import LinkedIn from "../public/linkedin.svg";
import Mail from "../public/mail.svg";
import RollDown from "./RollDown";

interface LandingProps {}

const Landing: React.FC<LandingProps> = ({}) => {
  const t = useTranslations("Landing");

  return (
    <div className="flex justify-center relative">
      <div className="container h-screen min-h-[300px] p-5 pt-14 flex justify-center items-center flex-col">
        <p className="text-amber-400 font-bold tracking-wider text-3xl mb-2">
          {t("name")}
        </p>
        <p className="text-amber-400 font-light tracking-wider text-xl">
          {t("occupation")}
        </p>
        <div className="flex mt-4 gap-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/wilsonbljr"
          >
            <Github className="w-10 h-10 fill-amber-400" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/wilsonbljr/"
          >
            <LinkedIn className="w-10 h-10 fill-amber-400" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:wilson.bley@hotmail.com"
          >
            <Mail className="w-10 h-10 fill-amber-400" />
          </a>
        </div>
      </div>
      <RollDown />
    </div>
  );
};

export default Landing;
