import { IIconButton } from 'src/app/models/interfaces/icon-button-interface';
import { styles } from 'src/app/models/enums/icon-buton-styles.enum';
import { faMehBlank } from '@fortawesome/free-solid-svg-icons';

export const templateInitial:IIconButton[] = [
    {
    text : "Edit",
    icon : faMehBlank,
    style: styles.Text,
    eventName:"editClicked"
    }
]
