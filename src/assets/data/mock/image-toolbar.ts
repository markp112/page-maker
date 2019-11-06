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
    },
    {
      text : "background Colour",
      icon : faPalette,
      style: styles.Icon,
      eventName: "imageBackgroundColor",
      enabled: true
    },


]
export const imgPositionButtons: IIconButton[] = [
  {
    text : "Image Left",
    icon : faArrowAltCircleLeft,
    style: styles.Icon,
    eventName:"imgLeft",
    enabled: true
  },
  {
    text : "Image Right",
    icon : faArrowAltCircleRight,
    style: styles.Icon,
    eventName:"imgRight",
    enabled: true
  },
  {
    text : "Image Up",
    icon : faArrowAltCircleUp,
    style: styles.Icon,
    eventName: "imgUp",
    enabled: true
  },
  {
    text : "Image Down",
    icon : faArrowAltCircleDown,
    style: styles.Icon,
    eventName: "imgDown",
    enabled: true
  },

]
export const imgSizeButtons: IIconButton[] = [
  {
    text: "Image Size Increase",
    icon: faPlusCircle,
    style: styles.Icon,
    eventName: "imgIncreaseSize",
    enabled: true
  },
  {
    text: "Image Size Decrease",
    icon: faMinusCircle,
    style: styles.Icon,
    eventName: "imgDecreaseSize",
    enabled: true
  }
];