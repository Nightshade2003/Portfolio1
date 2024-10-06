import { iconType } from "../types";
import {
  JavascriptSVG,
  HtmlSVG,
  CSSSVG,
  JspSVG,
  CppSVG,
  JavaSVG,
  PythonSVG,
  ReactSVG,
  NodeSVG,
  MongoDBSVG,
  ExpressSVG,
} from "../components/ui/icons"; // Make sure all these SVG components exist

let color: string = "#9ca3af";
export const techonologyIconList: iconType[] = [
  {
    name: "MERN Stack",
    icon: (
      <ReactSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "HTML",
    icon: (
      <HtmlSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "CSS",
    icon: (
      <CSSSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <JavascriptSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "JSP",
    icon: (
      <JspSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "C++",
    icon: (
      <CppSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "Java",
    icon: (
      <JavaSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "Python",
    icon: (
      <PythonSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "React",
    icon: (
      <ReactSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "Node",
    icon: (
      <NodeSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <MongoDBSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "Express",
    icon: (
      <ExpressSVG
        color={color}
        size={35}
      />
    ),
  },
];
