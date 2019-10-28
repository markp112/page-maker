import { IIconButton } from "src/app/models/interfaces/icon-button-interface";
import {
  faAlignLeft,
  faAlignRight,
  faAlignCenter,
  faMehBlank,
  faPlus,
  faMinus,
  faPalette,
  faPaintBrush
} from "@fortawesome/free-solid-svg-icons";
import { styles } from "src/app/models/enums/icon-buton-styles.enum";

export const textEditorButtonsGrp1: IIconButton[] = [
  {
    icon: faAlignLeft,
    style: styles.Icon,
    text: "",
    eventName: "alignLeft"
  },
  {
    icon: faAlignCenter,
    style: styles.Icon,
    text: "",
    eventName: "alignCenter"
  },
  {
    icon: faAlignRight,
    style: styles.Icon,
    text: "",
    eventName: "alignRight"
  }
];

export const textEditorButtonsGrp2: IIconButton[] = [
  {
    icon: faMehBlank,
    style: styles.Text,
    text: "F",
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
