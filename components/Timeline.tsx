import { useTranslations } from "next-intl";
import useIntersectionObserver from "../lib/hooks/useIntersectionObserver";
import Link from "../public/icons/link.svg";

interface TimelineProps {}

const Timeline: React.FC<TimelineProps> = ({}) => {
  const t = useTranslations("Timeline");

  const { ref: wiseRef, isVisible: wiseVisible } = useIntersectionObserver();
  const { ref: adsRef, isVisible: adsVisible } = useIntersectionObserver();
  const { ref: traineeRef, isVisible: traineeVisible } =
    useIntersectionObserver();
  const { ref: mecEngRef, isVisible: mecEngVisible } =
    useIntersectionObserver();

  return (
    <div className="flex items-center flex-col py-10 px-5">
      <div className="container">
        <h3 className="text-amber-400 font-bold tracking-wider text-3xl mb-10">
          {t("title")}
        </h3>
        <ol className="relative border-l border-amber-400 max-w-md">
          <li className="mb-10 ml-4" id="wise" ref={wiseRef}>
            <div className="absolute w-3 h-3 bg-amber-400 rounded-full mt-2.5 -left-[6.5px] border border-gray-200"></div>
            <time
              className={`text-xl font-light text-amber-200 ${
                wiseVisible ? "show-timeline" : "hide-timeline"
              }`}
            >
              {t("wise.time")}
            </time>
            <p
              className={`text-lg mt-3 mb-1 font-bold delay-200 ${
                wiseVisible ? "show-timeline" : "hide-timeline"
              }`}
            >
              {t("wise.title")}
            </p>
            <p
              className={`text-md font-regular delay-300 ${
                wiseVisible ? "show-timeline" : "hide-timeline"
              }`}
            >
              {t("wise.description")}
            </p>
            <p
              className={`text-md font-regular delay-300 ${
                wiseVisible ? "show-timeline" : "hide-timeline"
              }`}
            >
              {t.rich("wise.description_1", {
                important: (chunks) => (
                  <span className="text-amber-400">{chunks}</span>
                ),
              })}
            </p>
            <p
              className={`text-md font-regular delay-300 ${
                wiseVisible ? "show-timeline" : "hide-timeline"
              }`}
            >
              {t.rich("wise.description_2", {
                important: (chunks) => (
                  <span className="text-amber-400">{chunks}</span>
                ),
              })}
            </p>
            <p
              className={`text-md font-regular delay-300 ${
                wiseVisible ? "show-timeline" : "hide-timeline"
              }`}
            >
              {t.rich("wise.description_3", {
                important: (chunks) => (
                  <span className="text-amber-400">{chunks}</span>
                ),
              })}
            </p>
          </li>
          <li className="mb-10 ml-4" id="ads" ref={adsRef}>
            <div className="absolute w-3 h-3 bg-amber-400 rounded-full mt-2.5 -left-[6.5px] border border-gray-200"></div>
            <time
              className={`text-xl font-light text-amber-200 ${
                adsVisible ? "show-timeline" : "hide-timeline"
              }`}
            >
              {t("ads.time")}
            </time>
            <p
              className={`text-lg mt-3 mb-1 font-bold delay-200 ${
                adsVisible ? "show-timeline" : "hide-timeline"
              }`}
            >
              {t("ads.title")}
            </p>
            <p
              className={`text-md font-regular delay-300 ${
                adsVisible ? "show-timeline" : "hide-timeline"
              }`}
            >
              {t("ads.description")}
            </p>
          </li>
          <li className="mb-10 ml-4" id="trainee" ref={traineeRef}>
            <div className="absolute w-3 h-3 bg-amber-400 rounded-full mt-2.5 -left-[6.5px] border border-gray-200"></div>
            <time
              className={`text-xl font-light text-amber-200 ${
                traineeVisible ? "show-timeline" : "hide-timeline"
              }`}
            >
              {t("trainee.time")}
            </time>
            <p
              className={`text-lg mt-3 mb-1 font-bold delay-200 ${
                traineeVisible ? "show-timeline" : "hide-timeline"
              }`}
            >
              {t("trainee.title")}
            </p>
            <p
              className={`text-md font-regular delay-300 ${
                traineeVisible ? "show-timeline" : "hide-timeline"
              }`}
            >
              {t("trainee.description")}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/wilsonbljr/team-makr"
              className={`py-2 px-5 rounded-3xl border border-amber-300 flex 
              max-w-fit items-center gap-3 justify-center tracking-wide mt-5 ml-3 hover:bg-slate-900 delay-500 ${
                traineeVisible ? "show-timeline" : "hide-timeline"
              }`}
            >
              <Link className="w-5 h-5 fill-gray-200" />
              <span className="-mt-0.5 font-bold text-amber-300 leading-5 inline-block">
                {t("trainee.button")}
              </span>
            </a>
          </li>
          <li className="mb-10 ml-4" id="mecEng" ref={mecEngRef}>
            <div className="absolute w-3 h-3 bg-amber-400 rounded-full mt-2.5 -left-[6.5px] border border-gray-200"></div>
            <time
              className={`text-xl font-light text-amber-200 ${
                mecEngVisible ? "show-timeline" : "hide-timeline"
              }`}
            >
              {t("mechanical_engineering.time")}
            </time>
            <p
              className={`text-lg mt-3 mb-1 font-bold delay-200 ${
                mecEngVisible ? "show-timeline" : "hide-timeline"
              }`}
            >
              {t("mechanical_engineering.title")}
            </p>
            <p
              className={`text-md font-regular delay-300 ${
                mecEngVisible ? "show-timeline" : "hide-timeline"
              }`}
            >
              {t("mechanical_engineering.description")}
            </p>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-amber-400 rounded-full mt-4 -left-[6.5px] border border-gray-200"></div>
            <p className="absolute mt-1.5 text-xl font-light text-amber-200">
              {t("beginning")}
            </p>
            <p className="h-5"></p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Timeline;
