import { ToolbarTypesEnum } from 'src/app/models/enums/toolbar-types-enum';
import { IIconButton } from 'src/app/models/interfaces/icon-button-interface';
import { ButtonBuilder } from '../button-builder/butonBuilder';

export class ToolBarBuilder {

  private toolbar: IIconButton[] = [];

  public build(toolBarToBuild: ToolbarTypesEnum): IIconButton[] {
    this.toolbar = [];
    switch (toolBarToBuild) {
      case ToolbarTypesEnum.TextAlignment:
        this.buildTextAlignmentToolBar();
        break;

      case ToolbarTypesEnum.FontSettings:
        this.buildFontToolBar();
        break;

      case ToolbarTypesEnum.TextColourSettings:
        this.buildColorToolBar();
        break;

      case ToolbarTypesEnum.VerticalAlignment:
        this.buildTextVerticalAlignment();
    }
    console.log('%c⧭', 'color: #f2ceb6', this.toolbar);
    return this.toolbar;
  }

  private buildTextAlignmentToolBar() {
    this.toolbar.push(ButtonBuilder.alignLeftButton());
    this.toolbar.push(ButtonBuilder.alignCenterButton());
    this.toolbar.push(ButtonBuilder.alignJustifyButton());
    this.toolbar.push(ButtonBuilder.alignRightButton());
    console.log('%c⧭', 'color: #f2ceb6', this.toolbar);
  }

  private buildFontToolBar() {
    this.toolbar.push(ButtonBuilder.fontSelectionButton());
    this.toolbar.push(ButtonBuilder.fontIncreaseSizeButton());
    this.toolbar.push(ButtonBuilder.fontDecreaseSizeButton());
  }

  private buildColorToolBar() {
    this.toolbar.push(ButtonBuilder.setForeColourButton());
    this.toolbar.push(ButtonBuilder.setBackgroundColourButton());
  }

  private buildTextVerticalAlignment() {
    this.toolbar.push(ButtonBuilder.verticalAlignTopButton());
    this.toolbar.push(ButtonBuilder.verticalAlignCenterButton());
    this.toolbar.push(ButtonBuilder.verticalAlignBottomButton());
  }
}
