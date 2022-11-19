import CSS from "../../public/icons/css.svg";
import Docker from "../../public/icons/docker.svg";
import Express from "../../public/icons/express.svg";
import HTML from "../../public/icons/html.svg";
import JavaScript from "../../public/icons/javascript.svg";
import TypeScript from "../../public/icons/typescript.svg";
import Next from "../../public/icons/next.svg";
import TailWind from "../../public/icons/tailwind.svg";
import Java from "../../public/icons/java.svg";
import MySQL from "../../public/icons/mysql.svg";
import Spring from "../../public/icons/spring.svg";

export enum IconEnum {
  CSS = "CSS",
  Docker = "Docker",
  Express = "Express",
  HTML = "HTML",
  JavaScript = "JavaScript",
  TypeScript = "Typescript",
  Next = "Next",
  TailWind = "TailWind",
  Java = "Java",
  MySQL = "MySQL",
  Spring = "Spring",
}

export const getIcon = (icon: IconEnum) => {
  switch (icon) {
    case IconEnum.CSS:
      return <CSS className="w-12 h-12" />;
    case IconEnum.Docker:
      return <Docker className="w-12 h-12" />;
    case IconEnum.Express:
      return <Express className="w-12 h-12 fill-white" />;
    case IconEnum.HTML:
      return <HTML className="w-12 h-12" />;
    case IconEnum.JavaScript:
      return <JavaScript className="w-12 h-12" />;
    case IconEnum.TypeScript:
      return <TypeScript className="w-12 h-12" />;
    case IconEnum.Next:
      return <Next className="w-12 h-12 fill-white" />;
    case IconEnum.TailWind:
      return <TailWind className="w-12 h-12" />;
    case IconEnum.Java:
      return <Java className="w-12 h-12" />;
    case IconEnum.MySQL:
      return <MySQL className="w-12 h-12" />;
    case IconEnum.Spring:
      return <Spring className="w-12 h-12 fill-white" />;
  }
};
