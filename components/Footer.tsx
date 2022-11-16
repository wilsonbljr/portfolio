import { useTranslations } from "next-intl";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  const t = useTranslations("Footer");

  return (
    <div className="flex justify-center items-center h-10">
      <p className='text-gray-300 text-sm'>&#169; {t.rich("made_by")}</p>
    </div>
  );
};

export default Footer;
