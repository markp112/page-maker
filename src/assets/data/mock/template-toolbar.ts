import { IIconButton } from 'src/app/models/interfaces/icon-button-interface';
import { styles } from 'src/app/models/enums/icon-buton-styles.enum';
import { faSave, faEdit, faGripHorizontal } from '@fortawesome/free-solid-svg-icons';

export const templateInitial: IIconButton[] = [
    {
      text : "Edit",
      icon : faEdit,
      style: styles.Icon,
      eventName: "editClicked",
      enabled: true
    },
    {
      text : "Save",
      icon : faSave,
      style: styles.Icon,
      eventName: "saveClicked",
      enabled: false
    },
    {
      text : "Get",
      icon : faGripHorizontal,
      style: styles.Icon,
      eventName: "getClicked",
      enabled: true
    }

]
