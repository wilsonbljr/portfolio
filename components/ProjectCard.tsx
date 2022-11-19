import { useTranslations } from "next-intl";
import { getIcon, IconEnum } from "../lib/utils/iconUtils";

interface ProjectCardProps {
  title: string;
  description: string;
  stack: IconEnum[];
  date: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  stack,
  date,
}) => {
  const t = useTranslations("ProjectCard");

  return (
    <a
      href="https://github.com/wilsonbljr/team-makr"
      target="_blank"
      rel="noopener noreferrer"
      className="px-5 py-4 mt-8 bg-slate-700 rounded-md h-80 w-72 border-r border-slate-800 font-semibold hover:bg-slate-500 hover:text-amber-400 hover:cursor-pointer flex flex-col justify-between"
    >
      <div className="flex flex-col grow">
        <p className="text-amber-400 text-lg font-semibold mb-2">{title}</p>
        <p className="text-md font-light mb-2 h-[72px]">{description}</p>
        <div className="my-auto h-36">
          <p className="text-amber-400 text-md font-light">{t("made_with")}</p>
          <div className="flex flex-row flex-wrap gap-4 mt-2">
            {stack.map((tech) => (
              <div key={tech + title}>{getIcon(tech)}</div>
            ))}
          </div>
        </div>
      </div>
      <time className="text-sm font-bold self-end">{date}</time>
    </a>
  );
};

export default ProjectCard;
