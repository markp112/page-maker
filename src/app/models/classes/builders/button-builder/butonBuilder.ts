import { IIconButton, SelectList } from "../../../interfaces/icon-button";
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
import { IListItem } from '@app/modules/shared/drop-down/drop-down/models/model';


export class ButtonBuilder {

  private static buildEventName( buttonCommandType: ButtonCommandTypesEnum, eventName: ButtonEventEnums ): IButtonEvent {
    let buttonEvent: IButtonEvent = { buttonCommandType: buttonCommandType, eventName: eventName};
    // buttonEvent.buttonCommandType = buttonCommandType;
    // buttonEvent.eventName = eventName;
    return buttonEvent;
  }

  private static buildButton(eventName: IButtonEvent, enabled: boolean, icon: IconDefinition, text: string = ""
    , tooltip: string = ""): IIconButton {
    let button: IIconButton = {
      enabled: enabled,
      eventName: eventName,
      icon : icon,
      text: text,
      style: styles.Icon,

    };
    text === "" ? (button.style = styles.Icon) : (button.style = styles.Text);
    if(tooltip){ button.tooltip = tooltip };
    return button;
  }

  private static buildSelectList(eventName: IButtonEvent, enabled: boolean, listItems: IListItem[]): SelectList {
    let selectList: SelectList = {
      enabled:enabled,
      eventName: eventName,
      icon: faMehBlank,
      listData: listItems,
      style: styles.Text,
      text:"",
      tooltip: "Select font size",
    }
    return selectList;
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
      enabled: true,
      tooltip: "cancel"
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
      ),
      tooltip: "align text left"
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
      ),
      tooltip: "center text"
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
      ),
      tooltip: "justify text"
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
      ),
      tooltip: "align text right"
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
      ),
      tooltip: "change font"
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
      ),
      tooltip: "increase font size"
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
      ),
      tooltip: "decrease font size"
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
      ),
      tooltip: "text colour"
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
      ),
      tooltip: "background colour"
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
      ),
      tooltip: "align text top"
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
      ),
      tooltip: "vertical align center"
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
      ),
      tooltip: "align text bottom"
    };
  }
  public static imageUploadButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.Command,
      ButtonEventEnums.UploadFile
    );
    return this.buildButton(eventName, true, faUpload,"","upload from local");
  }

  public static imagePasteUrlButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.Command,
      ButtonEventEnums.UploadUrl
    );
    return this.buildButton(eventName, true, faPaste,"","paste www url");
  }

  public static imageBackgroundColourButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.Command,
      ButtonEventEnums.ImageBackgroundColour
    );
    return this.buildButton(eventName, true, faPalette,"","background colour");
  }

  public static imageLeftButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.ImageStyler,
      ButtonEventEnums.ImageLeft
    );
    return this.buildButton(eventName, true, faArrowAltCircleLeft,"","move left");
  }

  public static imageRightButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.ImageStyler,
      ButtonEventEnums.ImageRight
    );
    return this.buildButton(eventName, true, faArrowAltCircleRight,"","move right");
  }

  public static imageUpButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.ImageStyler,
      ButtonEventEnums.ImageUp
    );
    return this.buildButton(eventName, true, faArrowAltCircleUp,"","move up");
  }

  public static imageDownButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.ImageStyler,
      ButtonEventEnums.ImageDown
    );
    return this.buildButton(eventName, true, faArrowAltCircleDown,"","move down");
  }

  public static imageIncreaseSizeButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.ImageStyler,
      ButtonEventEnums.ImageIncreaseSize
    );
    return this.buildButton(eventName, true, faPlusCircle,"","increase size");
  }

  public static imageDecreaseSizeButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.ImageStyler,
      ButtonEventEnums.ImageDecreaseSize
    );
    return this.buildButton(eventName, true, faMinusCircle,"","decrease size");
  }

  public static commandEditButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.Command,
      ButtonEventEnums.Edit
    );
    return this.buildButton(eventName, true, faEdit,"","edit template");
  }
  public static commandSaveButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.Command,
      ButtonEventEnums.Save
    );
    return this.buildButton(eventName, true, faSave,"","save changes");
  }

  public static commandGetDataButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.Command,
      ButtonEventEnums.RetrieveSavedData
    );
    return this.buildButton(eventName, true, faGripHorizontal,"","retrieve content");
  }

  public static commandPublishButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.Command,
      ButtonEventEnums.Publish
    );
    return this.buildButton(eventName, true, faCloudUploadAlt,"","publish template");
  }

  public static fontTypesDisplayButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.Command,
      ButtonEventEnums.FontTypeDisplay
    );
    return this.buildButton(eventName, true, faMehBlank, "d","display");
  }

  public static fontTypesMonoSpaceButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.Command,
      ButtonEventEnums.FontTypeMonospace
    );
    return this.buildButton(eventName, true, faMehBlank, "m","monotype");
  }

  public static fontTypesHandwritingButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.Command,
      ButtonEventEnums.FontTypeHandwriting
    );
    return this.buildButton(eventName, true, faMehBlank, "h","handwriting");
  }

  public static fontTypesSerifButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.Command,
      ButtonEventEnums.FontTypeHandwriting
    );
    return this.buildButton(eventName, true, faMehBlank, "s","serif");
  }

  public static fontTypesSansSerifButton(): IIconButton {
    let eventName: IButtonEvent = this.buildEventName(
      ButtonCommandTypesEnum.Command,
      ButtonEventEnums.FontTypeHandwriting
    );
    return this.buildButton(eventName, true, faMehBlank, "ss","sans serif");
  }

  public static selectList(listItems: IListItem[]): SelectList {
    let eventName: IButtonEvent = this.buildEventName(ButtonCommandTypesEnum.TextStyler,  ButtonEventEnums.ChangeFontSize);
    console.log("Select list -",this.buildSelectList(eventName, true, listItems))
    return this.buildSelectList(eventName, true, listItems);
  }
}
