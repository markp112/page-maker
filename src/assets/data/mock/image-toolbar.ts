import { IIconButton } from 'src/app/models/interfaces/icon-button-interface';
import { styles } from 'src/app/models/enums/icon-buton-styles.enum';
import { faUpload, faPaste } from '@fortawesome/free-solid-svg-icons';

export const imgEditButtons: IIconButton[] = [
    {
      text : "upload",
      icon : faUpload,
      style: styles.Icon,
      eventName:"uploadClicked",
      enabled: true
    },
    {
      text : "Url",
      icon : faPaste,
      style: styles.Icon,
      eventName:"urlClicked",
      enabled: true
    }
]
