import { IIconButton } from "src/app/models/interfaces/icon-button-interface";
import { styles } from "src/app/models/enums/icon-buton-styles.enum";

import {faMehBlank} from "@fortawesome/free-solid-svg-icons";
import { ButtonEventEnums } from 'src/app/models/enums/ButtonEventEnums';


export const fontDropDownButtons: IIconButton[] = [
      {
    icon: faMehBlank,
    style: styles.Text,
    text: "d",
    eventName: ButtonEventEnums.FontTypeDisplay
  },
  {
    icon: faMehBlank,
    style: styles.Text,
    text: "m",
    eventName: ButtonEventEnums.FontTypeMonospace
  },
  {
    icon:faMehBlank,
    style: styles.Text,
    text: "h",
    eventName: ButtonEventEnums.FontTypeHandwriting
  },
  {
    icon: faMehBlank,
    style: styles.Text,
    text: "s",
    eventName: ButtonEventEnums.FontTypeSerif
  },
    {
    icon: faMehBlank,
    style: styles.Text,
    text: "ss",
    eventName: ButtonEventEnums.FontTypeSansSerif
  }
];
