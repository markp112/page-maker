import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { styles } from '../enums/icon-buton-styles.enum';
import { IButtonEvent } from './button-event';

export interface IIconButton {
    icon: IconDefinition;
    text: string;
    eventName: IButtonEvent;
    style: styles;
    enabled?: boolean;
}
