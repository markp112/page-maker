import { IIconButton } from '../../../interfaces/icon-button-interface';
import { faWindowClose, faAlignLeft, faAlignCenter, faAlignJustify, faAlignRight, faFont, faPlus, faMinus, faPaintBrush, faPalette, faSortAmountUpAlt, faGripLines, faSortAmountDownAlt } from "@fortawesome/free-solid-svg-icons";
import { styles } from '../../../enums/icon-buton-styles.enum';
import { ButtonEventEnums } from 'src/app/models/enums/ButtonEventEnums';

export class ButtonBuilder {

  public static cancelButton(): IIconButton {
    return {
      icon: faWindowClose,
      text: "",
      eventName: ButtonEventEnums.Cancel,
      style: styles.Icon,
      enabled: true
    };
  }

  public static alignLeftButton(): IIconButton {
    return {
      icon: faAlignLeft,
      style: styles.Icon,
      text: "",
      eventName: ButtonEventEnums.AlignLeft
    };
  }

  public static alignCenterButton(): IIconButton {
    return {
      icon: faAlignCenter,
      style: styles.Icon,
      text: "",
      eventName: ButtonEventEnums.AlignCenter
    };
  }

  public static alignJustifyButton(): IIconButton {
    return {
      icon: faAlignJustify,
      style: styles.Icon,
      text: "",
      eventName: ButtonEventEnums.Justify
    };
  }

  public static alignRightButton(): IIconButton {
    return {
      icon: faAlignRight,
      style: styles.Icon,
      text: "",
      eventName: ButtonEventEnums.AlignRight
    };
  }

  public static fontSelectionButton(): IIconButton {
    return {
      icon: faFont,
      style: styles.Icon,
      text: "",
      eventName: ButtonEventEnums.FontFamily
    };

  }

  public static fontIncreaseSizeButton(): IIconButton {
    return {
      icon: faPlus,
      style: styles.Icon,
      text: "",
      eventName: ButtonEventEnums.IncreaseFontSize
    };
  }

  public static fontDecreaseSizeButton(): IIconButton {
    return {
      icon: faMinus,
      style: styles.Icon,
      text: "",
      eventName: ButtonEventEnums.DecreaseFontSize
    };
  }

  public static setForeColourButton(): IIconButton {
    return {
      icon: faPaintBrush,
      style: styles.Icon,
      text: "",
      eventName: ButtonEventEnums.ForeColour
    };
  }

  public static setBackgroundColourButton(): IIconButton {
    return {
      icon: faPalette,
      style: styles.Icon,
      text: "",
      eventName: ButtonEventEnums.BackgroundColour
    };
  }

  public static verticalAlignTopButton(): IIconButton {
    return {
      icon: faSortAmountUpAlt,
      style: styles.Icon,
      text: "",
      eventName: ButtonEventEnums.VerticalAlignTop
    };
  }

  public static verticalAlignCenterButton(): IIconButton {
    return {
      icon: faGripLines,
      style: styles.Icon,
      text: "",
      eventName: ButtonEventEnums.VerticalAlignCenter
    };
  }

  public static verticalAlignBottomButton(): IIconButton {
    return {
      icon: faSortAmountDownAlt,
      style: styles.Icon,
      text: "",
      eventName: ButtonEventEnums.VerticalAlignBottom
    };
  }
}
