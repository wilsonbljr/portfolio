import { useTranslations } from "next-intl";
import Link from "next/link";
import { MutableRefObject } from "react";
import Github from "../public/icons/github.svg";
import LinkedIn from "../public/icons/linkedin.svg";
import Mail from "../public/icons/mail.svg";
import Avatar from "./Avatar";
import RollDown from "./RollDown";

interface LandingProps {
  aboutRef: MutableRefObject<null | Element>;
}

const Landing: React.FC<LandingProps> = ({ aboutRef }) => {
  const t = useTranslations("Landing");

  const scrollIntoAbout = () => {
    aboutRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-center relative">
      <div className="container h-screen min-h-[300px] p-5 pt-14 flex justify-center items-center flex-col">
        <Avatar />
        <h1 className="text-amber-400 font-bold tracking-wider text-3xl mb-2 mt-8">
          {t("name")}
        </h1>
        <h2 className="text-amber-300 font-light tracking-wider text-xl">
          {t("occupation")}
        </h2>
        <div className="flex flex-row">
          <div
            onClick={scrollIntoAbout}
            className="px-5 py-2 mt-8 bg-slate-700 rounded-l-md border-r border-slate-800 font-semibold hover:bg-slate-500 hover:text-amber-400 hover:cursor-pointer"
          >
            About
          </div>
          <Link
            href="/projects"
            className="px-5 py-2 mt-8 bg-slate-700 rounded-r-md font-semibold hover:bg-slate-500 hover:text-amber-400 hover:cursor-pointer"
          >
            Projects
          </Link>
        </div>
        <div className="flex mt-8 gap-2">
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
