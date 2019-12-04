import { ButtonBuilder } from "./butonBuilder";
import { IIconButton } from "src/app/models/interfaces/icon-button-interface";
import { styles } from "src/app/models/enums/icon-buton-styles.enum";
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
  faSortAmountDownAlt
} from "@fortawesome/free-solid-svg-icons";
import { ButtonEventEnums } from 'src/app/models/enums/ButtonEventEnums';

describe("cancelButton Constructor", () => {
  let cancelButton: IIconButton = ButtonBuilder.cancelButton();

  it("should return an object with an event name of cancelClicked", () => {
    expect(cancelButton.eventName).toBe(ButtonEventEnums.Cancel);
  });
  it("should return an object with a style set to icon", () => {
    expect(cancelButton.style).toEqual(styles.Icon);
  });
  it("should return an object with enabled set to true", () => {
    expect(cancelButton.enabled).toBeTruthy();
  });
  it("should return an object with an icon set to FaWinClose", () => {
    expect(cancelButton.icon).toEqual(faWindowClose);
  });
});

describe("AlignLeftButton Constructor", () => {
  let alignLeftButton: IIconButton = ButtonBuilder.alignLeftButton();
  it("should return an IIconButton with an event name of Align Left", () => {
    expect(alignLeftButton.eventName).toBe(ButtonEventEnums.AlignLeft);
  });
  it("should return an object with a style set to icon", () => {
    expect(alignLeftButton.style).toEqual(styles.Icon);
  });
  it("should return an object with an icon set to faAlignLeft", () => {
    expect(alignLeftButton.icon).toEqual(faAlignLeft);
  });
});

describe("AlignCenterButton Constructor", () => {
  let alignCenterButton: IIconButton = ButtonBuilder.alignCenterButton();
  it("should return an IIconButton with an event name of Align Center", () => {
    expect(alignCenterButton.eventName).toBe(ButtonEventEnums.AlignCenter);
  });
  it("should return an object with a style set to icon", () => {
    expect(alignCenterButton.style).toEqual(styles.Icon);
  });
  it("should return an object with an icon set to faAlignCenter", () => {
    expect(alignCenterButton.icon).toEqual(faAlignCenter);
  });
});

  describe("AlignJustifyButton Constructor", () => {
    let alignJustifyButton: IIconButton = ButtonBuilder.alignJustifyButton();
    it("should return an IIconButton with an event name of Justify", () => {
      expect(alignJustifyButton.eventName).toBe(ButtonEventEnums.Justify);
    });
    it("should return an object with a style set to icon", () => {
      expect(alignJustifyButton.style).toEqual(styles.Icon);
    });
    it("should return an object with an icon set to faAlignJustify", () => {
      expect(alignJustifyButton.icon).toEqual(faAlignJustify);
    });
  });

  describe("AlignRightButton Constructor", () => {
    let alignRightButton: IIconButton = ButtonBuilder.alignRightButton();
    it("should return an IIconButton with an event name of Align Right", () => {
      expect(alignRightButton.eventName).toBe(ButtonEventEnums.AlignRight);
    });
    it("should return an object with a style set to icon", () => {
      expect(alignRightButton.style).toEqual(styles.Icon);
    });
    it("should return an object with an icon set to faAlignRight", () => {
      expect(alignRightButton.icon).toEqual(faAlignRight);
    });
  });

  describe("FontSelectionButton Constructor", () => {
    let fontSelectionButton: IIconButton = ButtonBuilder.fontSelectionButton();
    it("should return an IIconButton with an event name of fontFamily", () => {
      expect(fontSelectionButton.eventName).toBe(ButtonEventEnums.FontFamily);
    });
    it("should return an object with a style set to icon", () => {
      expect(fontSelectionButton.style).toEqual(styles.Icon);
    });
    it("should return an object with an icon set to faFont", () => {
      expect(fontSelectionButton.icon).toEqual(faFont);
    });
  });

  describe("IncreaseFontSizeButton Constructor", () => {
    let fontIncreaseSizeButton: IIconButton = ButtonBuilder.fontIncreaseSizeButton();
    it("should return an IIconButton with an event name of increaseFont", () => {
      expect(fontIncreaseSizeButton.eventName).toBe(ButtonEventEnums.IncreaseFontSize);
    });
    it("should return an object with a style set to icon", () => {
      expect(fontIncreaseSizeButton.style).toEqual(styles.Icon);
    });
    it("should return an object with an icon set to faPlus", () => {
      expect(fontIncreaseSizeButton.icon).toEqual(faPlus);
    });
  });

  describe("IncreaseFontSizeButton Constructor", () => {
    let fontDecreaseSizeButton: IIconButton = ButtonBuilder.fontDecreaseSizeButton();
    it("should return an IIconButton with an event of decreaseFont", () => {
      expect(fontDecreaseSizeButton.eventName).toBe(ButtonEventEnums.DecreaseFontSize);
    });
    it("should return an object with a style set to icon", () => {
      expect(fontDecreaseSizeButton.style).toEqual(styles.Icon);
    });
    it("should return an object with an icon set to faMinus", () => {
      expect(fontDecreaseSizeButton.icon).toEqual(faMinus);
    });
  });

  describe("SetForeColourButton Constructor", () => {
    let setForeColourButton: IIconButton = ButtonBuilder.setForeColourButton ();
    it("should return an IIconButton with an event name of foreColor", () => {
      expect(setForeColourButton.eventName).toBe(ButtonEventEnums.ForeColour);
    });
    it("should return an object with a style set to icon", () => {
      expect(setForeColourButton.style).toEqual(styles.Icon);
    });
    it("should return an object with an icon set to faPaintBrush", () => {
      expect(setForeColourButton.icon).toEqual(faPaintBrush);
    });
  });

  describe("SetBackgroundColourButton Constructor", () => {
    let setBakcgroundColourButton: IIconButton = ButtonBuilder.setBackgroundColourButton();
    it("should return an IIconButton with an event name of BackgroundColour", () => {
      expect(setBakcgroundColourButton.eventName).toBe(ButtonEventEnums.BackgroundColour);
    });
    it("should return an object with a style set to icon", () => {
      expect(setBakcgroundColourButton.style).toEqual(styles.Icon);
    });
    it("should return an object with an icon set to faPalette", () => {
      expect(setBakcgroundColourButton.icon).toEqual(faPalette);
    });
  });

  describe("VerticalAlignCenter Constructor", () => {
    let verticalAlignCenterButton: IIconButton = ButtonBuilder.verticalAlignCenterButton();
    it("should return an IIconButton with an event name of Vertical Align Centre", () => {
      expect(verticalAlignCenterButton.eventName).toBe(ButtonEventEnums.VerticalAlignCenter);
    });
    it("should return an object with a style set to icon", () => {
      expect(verticalAlignCenterButton.style).toEqual(styles.Icon);
    });
    it("should return an object with an icon set to faGripLines", () => {
      expect(verticalAlignCenterButton.icon).toEqual(faGripLines);
    });
  });

  describe("VerticalAlignTopButton Constructor", () => {
    let verticalAlignTopButton: IIconButton = ButtonBuilder.verticalAlignTopButton();
    it("should return an IIconButton with an event name of Vertical Align Top", () => {
      expect(verticalAlignTopButton.eventName).toBe(ButtonEventEnums.VerticalAlignTop);
    });
    it("should return an object with a style set to icon", () => {
      expect(verticalAlignTopButton.style).toEqual(styles.Icon);
    });
    it("should return an object with an icon set to faSortAmountUpAlt", () => {
      expect(verticalAlignTopButton.icon).toEqual(faSortAmountUpAlt);
    });
  });

  describe("SetBackgroundColourButton Constructor", () => {
    let verticalAlignBottomButton: IIconButton = ButtonBuilder.verticalAlignBottomButton();
    it("should return an IIconButton with an event name of Vertical Align Top", () => {
      expect(verticalAlignBottomButton.eventName).toBe(ButtonEventEnums.VerticalAlignBottom);
    });
    it("should return an object with a style set to icon", () => {
      expect(verticalAlignBottomButton.style).toEqual(styles.Icon);
    });
    it("should return an object with an icon set to faSortAmountDownAlt", () => {
      expect(verticalAlignBottomButton.icon).toEqual(faSortAmountDownAlt);
    });
  });

