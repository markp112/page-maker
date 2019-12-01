import { IIconButton } from 'src/app/models/interfaces/icon-button-interface';
import { styles } from 'src/app/models/enums/icon-buton-styles.enum';
import { faSave, faEdit, faGripHorizontal, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { ButtonEventEnums } from 'src/app/models/enums/ButtonEventEnums';

export const templateInitial: IIconButton[] = [
    {
      text : "Edit",
      icon : faEdit,
      style: styles.Icon,
      eventName: ButtonEventEnums.Edit,
      enabled: true
    },
    {
      text : "Save",
      icon : faSave,
      style: styles.Icon,
      eventName: ButtonEventEnums.Save,
      enabled: false
    },
    {
      text : "Get",
      icon : faGripHorizontal,
      style: styles.Icon,
      eventName: ButtonEventEnums.RetrieveSavedData,
      enabled: true
    },
    {
      text : "Publish",
      icon : faCloudUploadAlt,
      style: styles.Icon,
      eventName: ButtonEventEnums.Publish,
      enabled: true
    }

]
