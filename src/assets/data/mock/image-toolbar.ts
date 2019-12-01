import { IIconButton } from 'src/app/models/interfaces/icon-button-interface';
import { styles } from 'src/app/models/enums/icon-buton-styles.enum';
import {
        faUpload,
        faPaste,
        faPalette,
        faArrowAltCircleLeft,
        faArrowAltCircleRight,
        faArrowAltCircleUp,
        faArrowAltCircleDown,
        faPlusCircle,
        faMinusCircle} from '@fortawesome/free-solid-svg-icons';
import { ButtonEventEnums } from 'src/app/models/enums/ButtonEventEnums';

export const imgEditButtons: IIconButton[] = [
    {
      text : "upload",
      icon : faUpload,
      style: styles.Icon,
      eventName:ButtonEventEnums.UploadFile,
      enabled: true
    },
    {
      text : "Url",
      icon : faPaste,
      style: styles.Icon,
      eventName:ButtonEventEnums.UploadUrl,
      enabled: true
    },
    {
      text : "background Colour",
      icon : faPalette,
      style: styles.Icon,
      eventName: ButtonEventEnums.ImageBackgroundColour,
      enabled: true
    },


]
export const imgPositionButtons: IIconButton[] = [
  {
    text : "Image Left",
    icon : faArrowAltCircleLeft,
    style: styles.Icon,
    eventName:ButtonEventEnums.ImageLeft,
    enabled: true
  },
  {
    text : "Image Right",
    icon : faArrowAltCircleRight,
    style: styles.Icon,
    eventName:ButtonEventEnums.ImageRight,
    enabled: true
  },
  {
    text : "Image Up",
    icon : faArrowAltCircleUp,
    style: styles.Icon,
    eventName: ButtonEventEnums.ImageUp,
    enabled: true
  },
  {
    text : "Image Down",
    icon : faArrowAltCircleDown,
    style: styles.Icon,
    eventName: ButtonEventEnums.ImageDown,
    enabled: true
  },

]
export const imgSizeButtons: IIconButton[] = [
  {
    text: "Image Size Increase",
    icon: faPlusCircle,
    style: styles.Icon,
    eventName: ButtonEventEnums.ImageIncreaseSize,
    enabled: true
  },
  {
    text: "Image Size Decrease",
    icon: faMinusCircle,
    style: styles.Icon,
    eventName: ButtonEventEnums.ImageDecreaseSize,
    enabled: true
  }
];
