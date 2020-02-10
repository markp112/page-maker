import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { styles } from '../enums/icon-buton-styles.enum';
import { IButtonEvent } from './button-event';
import { IListItem } from '@app/modules/shared/drop-down/drop-down/models/model';

export interface IIconButton {
    icon: IconDefinition;
    text: string;
    eventName: IButtonEvent;
    style: styles;
    enabled?: boolean;
    tooltip?: string;

}

export interface SelectList extends IIconButton{
  listData: IListItem[];
}
