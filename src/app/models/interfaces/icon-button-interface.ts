import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { styles } from '../enums/icon-buton-styles.enum';
import { ButtonEventEnums } from '../enums/ButtonEventEnums';

export interface IIconButton {
    icon: IconDefinition;
    text: string;
    eventName: ButtonEventEnums;
    style: styles;
    enabled?: boolean;
}
