import { useTranslations } from "next-intl";
import Github from "../public/icons/github.svg";
import LinkedIn from "../public/icons/linkedin.svg";
import Mail from "../public/icons/mail.svg";
import Avatar from "./Avatar";
import RollDown from "./RollDown";

interface LandingProps {}

const Landing: React.FC<LandingProps> = ({}) => {
  const t = useTranslations("Landing");

  return (
    <div className="flex justify-center relative">
      <div className="container h-screen min-h-[300px] p-5 pt-14 flex justify-center items-center flex-col">
        <Avatar />
        <h1 className="text-amber-400 font-bold tracking-wider text-3xl mb-2 mt-10">
          {t("name")}
        </h1>
        <h2 className="text-amber-300 font-light tracking-wider text-xl">
          {t("occupation")}
        </h2>
        <div className="flex mt-4 gap-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/wilsonbljr"
            className="hover:cursor-pointer hover:animate-bounce"
          >
            <Github className="w-10 h-10 fill-gray-300 hover:fill-amber-400" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/wilsonbljr/"
            className="hover:cursor-pointer hover:animate-bounce"
          >
            <LinkedIn className="w-10 h-10 fill-gray-300 hover:fill-amber-400" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:wilsonbljr@gmail.com"
            className="hover:cursor-pointer hover:animate-bounce"
          >
            <Mail className="w-10 h-10 fill-gray-300 hover:fill-amber-400" />
          </a>
        </div>
      </div>
      <RollDown />
    </div>
  );
};

export default Landing;
