import { IIconButton } from "src/app/models/interfaces/icon-button-interface";
import { styles } from "src/app/models/enums/icon-buton-styles.enum";

import {
  faAlignLeft,
  faAlignRight,
  faAlignCenter,
  faAlignJustify,
  faFont,
  faMehBlank,
  faPlus,
  faMinus,
  faPalette,
  faPaintBrush,
  faGripLines,
  faSortAmountUpAlt,
  faSortAmountDownAlt,

} from "@fortawesome/free-solid-svg-icons";


export const textEditorButtonsGrp1: IIconButton[] = [
    {
      icon: faAlignLeft,
      style: styles.Icon,
      text: "",
      eventName: "H-0"  //see enum textHorizontalAlignment
    },
    {
      icon: faAlignCenter,
      style: styles.Icon,
      text: "",
      eventName: "H-2"
    },
    {
      icon: faAlignJustify,
      style: styles.Icon,
      text: "",
      eventName: "H-3"
    },
    {
      icon: faAlignRight,
      style: styles.Icon,
      text: "",
      eventName: "H-1"
    }
  ];

export const textEditorButtonsGrp2: IIconButton[] = [
  {
    icon: faFont,
    style: styles.Icon,
    text: "",
    eventName: "font"
  },
  {
    icon: faPlus,
    style: styles.Icon,
    text: "",
    eventName: "increaseFont"
  },
  {
    icon: faMinus,
    style: styles.Icon,
    text: "",
    eventName: "decreaseFont"
  }
];

export const textEditorButtonsGrp3: IIconButton[] = [
  {
    icon: faPaintBrush,
    style: styles.Icon,
    text: "",
    eventName: "fontColor"
  },
  {
    icon: faPalette,
    style: styles.Icon,
    text: "",
    eventName: "backgroundColor"
  }
];


export const textEditorButtonsGrp4: IIconButton[] = [
  {
    icon: faSortAmountUpAlt,
    style: styles.Icon,
    text: "",
    eventName: "V-0"
  },
  {
    icon: faGripLines,
    style: styles.Icon,
    text: "",
    eventName: "V-2"
  },
   {
    icon: faSortAmountDownAlt,
    style: styles.Icon,
    text: "",
    eventName: "V-1"
  },
];

