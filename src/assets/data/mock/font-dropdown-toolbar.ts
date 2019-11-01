import { IIconButton } from "src/app/models/interfaces/icon-button-interface";
import { styles } from "src/app/models/enums/icon-buton-styles.enum";

import {faMehBlank} from "@fortawesome/free-solid-svg-icons";


export const fontDropDownButtons: IIconButton[] = [
      {
    icon: faMehBlank,
    style: styles.Text,
    text: "d",
    eventName: "display"
  },
  {
    icon: faMehBlank,
    style: styles.Text,
    text: "m",
    eventName: "monospace"
  },
  {
    icon:faMehBlank,
    style: styles.Text,
    text: "h",
    eventName: "handwriting"
  },
  {
    icon: faMehBlank,
    style: styles.Text,
    text: "s",
    eventName: "serif"
  },
    {
    icon: faMehBlank,
    style: styles.Text,
    text: "ss",
    eventName: "sans-serif"
  }
];
