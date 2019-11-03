import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { styles } from '../enums/icon-buton-styles.enum';

export interface IIconButton {
    icon:IconDefinition;
    text:string;
    eventName:string;
    style: styles;
    enabled?: boolean;
}
