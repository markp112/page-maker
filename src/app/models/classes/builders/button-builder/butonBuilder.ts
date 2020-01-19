import { IIconButton } from "../../../interfaces/icon-button-interface";
import {
  faWindowClose,
  faAlignLeft,
  faAlignCenter,
  faAlignJustify,
  faAlignRight,
  faFont,
  faPlus,
  faMinus,
  faPaintBrush,
  faPalette,
  faSortAmountUpAlt,
  faGripLines,
  faSortAmountDownAlt,
  IconDefinition,
  faUpload,
  faPaste,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faArrowAltCircleUp,
  faArrowAltCircleDown,
  faPlusCircle,
  faMinusCircle,
  faEdit,
  faSave,
  faGripHorizontal,
  faCloudUploadAlt,
  faMehBlank
} from "@fortawesome/free-solid-svg-icons";
import { styles } from "../../../enums/icon-buton-styles.enum";
import { ButtonEventEnums } from "src/app/models/enums/ButtonEventEnums";
import { ButtonCommandTypesEnum } from "src/app/models/enums/Button-Command-Type-enums";
import { IButtonEvent } from "src/app/models/interfaces/button-event";


export class ButtonBuilder { 
  
  private static buildEventName( buttonCommandType: ButtonCommandTypesEnum, eventName: ButtonEventEnums ): IButtonEvent {
    let buttonEvent: IButtonEvent = { buttonCommandType: buttonCommandType, eventName: eventName};
    // buttonEvent.buttonCommandType = buttonCommandType;
    // buttonEvent.eventName = eventName;
    return buttonEvent;
  }

  private static buildButton(eventName: IButtonEvent, enabled: boolean, icon: IconDefinition, text: string = ""
  ): IIconButton {
    let button: IIconButton = {
    enabled: enabled,
    eventName: eventName,
    icon : icon,
    text: text,
    style: styles.Icon
};
text === "" ? (button.style = styles.Icon) : (button.style = styles.Text);
    return button;
  }

  public static cancelButton(): IIconButton {
    return {
      icon: faWindowClose,
      text: "",
      eventName: this.buildEventName(
        ButtonCommandTypesEnum.Command,
        ButtonEventEnums.Cancel
      ),
      style: styles.Icon,
      enabled: true
    };
  }

  public static alignLeftButton(): IIconButton {
    return {
      icon: faAlignLeft,
      style: styles.Icon,
      text: "",
      eventName: this.buildEventName(
        ButtonCommandTypesEnum.TextStyler,
        ButtonEventEnums.AlignLeft
      )
    };
  }

  public static alignCenterButton(): IIconButton {
    return {
      icon: faAlignCenter,
      style: styles.Icon,
      text: "",
      eventName: this.buildEventName(
        ButtonCommandTypesEnum.TextStyler,
        ButtonEventEnums.AlignCenter
      )
    };
  }

  public static alignJustifyButton(): IIconButton {
    return {
      icon: faAlignJustify,
      style: styles.Icon,
      text: "",
      eventName: this.buildEventName(
        ButtonCommandTypesEnum.TextStyler,
        ButtonEventEnums.Justify
      )
    };
  }

  public static alignRightButton(): IIconButton {
    return {
      icon: faAlignRight,
      style: styles.Icon,
      text: "",
      eventName: this.buildEventName(
        ButtonCommandTypesEnum.TextStyler,
        ButtonEventEnums.AlignRight
      )
    };
  }

  public static fontSelectionButton(): IIconButton {
    return {
      icon: faFont,
      style: styles.Icon,
      text: "",
      eventName: this.buildEventName(
        ButtonCommandTypesEnum.Command,
        ButtonEventEnums.FontFamily
      )
    };
  }

  public static fontIncreaseSizeButton(): IIconButton {
    return {
      icon: faPlus,
      style: styles.Icon,
      text: "",
      eventName: this.buildEventName(
        ButtonCommandTypesEnum.TextStyler,
        ButtonEventEnums.IncreaseFontSize
      )
    };
  }

  public static fontDecreaseSizeButton(): IIconButton {
    return {
      icon: faMinus,
      style: styles.Icon,
      text: "",
      eventName: this.buildEventName(
        ButtonCommandTypesEnum.TextStyler,
        ButtonEventEnums.DecreaseFontSize
      )
    };
  }

  public static setForeColourButton(): IIconButton {
    return {
      icon: faPaintBrush,
      style: styles.Icon,
      text: "",
      eventName: this.buildEventName(
        ButtonCommandTypesEnum.Command,
        ButtonEventEnums.ForeColour
      )
    };
  }

  public static setBackgroundColourButton(): IIconButton {
    return {
      icon: faPalette,
      style: styles.Icon,
      text: "",
      eventName: this.buildEventName(
        ButtonCommandTypesEnum.Command,
        ButtonEventEnums.BackgroundColour
      )
    };
  }

  public static verticalAlignTopButton(): IIconButton {
    return {
      icon: faSortAmountUpAlt,
      style: styles.Icon,
      text: "",
      eventName: this.buildEventName(
        ButtonCommandTypesEnum.TextStyler,
        ButtonEventEnums.VerticalAlignTop
      )
    };
  }

  public static verticalAlignCenterButton(): IIconButton {
    return {
      icon: faGripLines,
      style: styles.Icon,
      text: "",
      eventName: this.buildEventName(
        ButtonCommandTypesEnum.TextStyler,
        ButtonEventEnums.VerticalAlignCenter
      )
    };
  }

  public static verticalAlignBottomButton(): IIconButton {
    return {
      icon: faSortAmountDownAlt,
      style: styles.Icon,
      text: "",
      eventName: this.buildEventName(
        ButtonCommandTypesEnum.TextStyler,
        ButtonEventEnums.VerticalAlignBottom
      )
    };
  }
  public static imageUploadButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.Command,
      ButtonEventEnums.UploadFile
    );
    return this.buildButton(eventName, true, faUpload);
  }

  public static imagePasteUrlButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.Command,
      ButtonEventEnums.UploadUrl
    );
    return this.buildButton(eventName, true, faPaste);
  }

  public static imageBackgroundColourButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.Command,
      ButtonEventEnums.ImageBackgroundColour
    );
    return this.buildButton(eventName, true, faPalette);
  }

  public static imageLeftButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.ImageStyler,
      ButtonEventEnums.ImageLeft
    );
    return this.buildButton(eventName, true, faArrowAltCircleLeft);
  }

  public static imageRightButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.ImageStyler,
      ButtonEventEnums.ImageRight
    );
    return this.buildButton(eventName, true, faArrowAltCircleRight);
  }

  public static imageUpButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.ImageStyler,
      ButtonEventEnums.ImageUp
    );
    return this.buildButton(eventName, true, faArrowAltCircleUp);
  }

  public static imageDownButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.ImageStyler,
      ButtonEventEnums.ImageDown
    );
    return this.buildButton(eventName, true, faArrowAltCircleDown);
  }

  public static imageIncreaseSizeButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.ImageStyler,
      ButtonEventEnums.ImageIncreaseSize
    );
    return this.buildButton(eventName, true, faPlusCircle);
  }

  public static imageDecreaseSizeButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.ImageStyler,
      ButtonEventEnums.ImageDecreaseSize
    );
    return this.buildButton(eventName, true, faMinusCircle);
  }

  public static commandEditButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.Command,
      ButtonEventEnums.Edit
    );
    return this.buildButton(eventName, true, faEdit);
  }
  public static commandSaveButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.Command,
      ButtonEventEnums.Save
    );
    return this.buildButton(eventName, true, faSave);
  }

  public static commandGetDataButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.Command,
      ButtonEventEnums.RetrieveSavedData
    );
    return this.buildButton(eventName, true, faGripHorizontal);
  }

  public static commandPublishButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.Command,
      ButtonEventEnums.Publish
    );
    return this.buildButton(eventName, true, faCloudUploadAlt);
  }

  public static fontTypesDisplayButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.Command,
      ButtonEventEnums.FontTypeDisplay
    );
    return this.buildButton(eventName, true, faMehBlank, "d");
  }

  public static fontTypesMonoSpaceButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.Command,
      ButtonEventEnums.FontTypeMonospace
    );
    return this.buildButton(eventName, true, faMehBlank, "m");
  }

  public static fontTypesHandwritingButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.Command,
      ButtonEventEnums.FontTypeHandwriting
    );
    return this.buildButton(eventName, true, faMehBlank, "h");
  }

  public static fontTypesSerifButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.Command,
      ButtonEventEnums.FontTypeHandwriting
    );
    return this.buildButton(eventName, true, faMehBlank, "s");
  }

  public static fontTypesSansSerifButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.Command,
      ButtonEventEnums.FontTypeHandwriting
    );
    return this.buildButton(eventName, true, faMehBlank, "ss");
  }
}
