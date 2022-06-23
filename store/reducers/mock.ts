import { Card } from "../../interfaces/card";
import { SWITCHER_MODE } from "../../interfaces/switcher";

const mockCards: Card[] = [
  {
    imagePath: "/Sofa.png",
    isActive: false,
    mode: SWITCHER_MODE.Design,
    title: "SOFA",
  },
  {
    imagePath: "/Keyboard.png",
    isActive: false,
    mode: SWITCHER_MODE.Branding,
    title: "KeyBoard",
  },
  {
    imagePath: "/Workmedia.png",
    isActive: false,
    mode: SWITCHER_MODE.Illustration,
    title: "Work Media",
  },
  {
    imagePath: "/Dddone.png",
    isActive: false,
    mode: SWITCHER_MODE.Motion,
    title: "DDDone",
  },
  {
    imagePath: "/Abstract.png",
    isActive: false,
    mode: SWITCHER_MODE.Design,
    title: "Abstract",
  },
  {
    imagePath: "/Handp.png",
    isActive: false,
    mode: SWITCHER_MODE.Branding,
    title: "HandP",
  },
  {
    imagePath: "/Architect.png",
    isActive: false,
    mode: SWITCHER_MODE.Motion,
    title: "Architect",
  },
  {
    imagePath: "/Calc.png",
    isActive: false,
    mode: SWITCHER_MODE.Design,
    title: "CalC",
  },
  {
    imagePath: "/Sport.png",
    isActive: false,
    mode: SWITCHER_MODE.Branding,
    title: "Sport",
  },
];

export default mockCards;
