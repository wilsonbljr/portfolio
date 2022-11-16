import { useTranslations } from "next-intl";
import Terminal from "../public/icons/terminal.svg";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const t = useTranslations("Header");

  return (
    <div className="absolute top-0 w-screen bg-slate-800">
      <div className="flex justify-center">
        <div className="container h-14 flex flex-row w-screen justify-center gap-10 items-center relative">
          <Terminal className="w-6 h-6 fill-amber-400 absolute top-4 left-0" />
          <p className="text-lg font-semibold tracking-wide decoration-solid decoration-amber-400 hover:underline hover:cursor-pointer">
            {t("about")}
          </p>
          <p className="text-lg font-semibold tracking-wide decoration-solid decoration-amber-400 hover:underline hover:cursor-pointer">
            {t("posts")}
          </p>
          <p className="text-lg font-semibold tracking-wide decoration-solid decoration-amber-400 hover:underline hover:cursor-pointer">
            {t("project")}
          </p>
        </div>
      </div>
      <div className="h-px bg-amber-400 w-full"></div>
    </div>
  );
};

export default Header;
