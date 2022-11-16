import { useTranslations } from "next-intl";
import ChevronDown from "../public/icons/chevron-down.svg";

interface RollDownProps {}

const RollDown: React.FC<RollDownProps> = ({}) => {
  const t = useTranslations("RollDown");

  return (
    <div className="absolute bottom-2 flex justify-center flex-col items-center gap-1 animate-bounce hover:cursor-default">
      <p className="fill-gray-200">{t("scrolldown")}</p>
      <ChevronDown className="h-5 w-5 fill-gray-200" />
    </div>
  );
};

export default RollDown;
