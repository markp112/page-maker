import { cssStyleEnum } from '../enums/cssStylesEnum';

export interface ICssStyles {
    styleTag: string;           // css actual style tag
    pmStyleProperty: cssStyleEnum;    // internal name for style tag used to referenec a property on textArea or                                      ImageArea
    value: string;              // actual value for this control
}
