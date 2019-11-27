import { IIconButton } from '../../interfaces/icon-button-interface';
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { styles } from '../../enums/icon-buton-styles.enum';

export class ButtonBuilder {

    public static CancelButton():IIconButton {
        return {
            icon: faWindowClose,
            text: "",
            eventName: "handleCancelClick",
            style: styles.Icon,
            enabled: true
        };
    }
}