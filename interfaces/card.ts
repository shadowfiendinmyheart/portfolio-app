import { SWITCHER_MODE } from "./switcher";

export interface Card {
  imagePath: string;
  mode: SWITCHER_MODE;
  title: string;
  isActive: boolean;
}
