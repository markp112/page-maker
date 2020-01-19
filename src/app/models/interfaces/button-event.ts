import { ButtonCommandTypesEnum } from '../enums/Button-Command-Type-enums';
import { ButtonEventEnums } from '../enums/ButtonEventEnums';
export interface IButtonEvent { buttonCommandType: ButtonCommandTypesEnum, eventName: ButtonEventEnums;}
