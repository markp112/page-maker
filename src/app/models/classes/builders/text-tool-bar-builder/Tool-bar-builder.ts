import { ToolbarTypesEnum } from 'src/app/models/enums/toolbar-types-enum';
import { IIconButton } from 'src/app/models/interfaces/icon-button-interface';
import { ButtonBuilder } from '../button-builder/butonBuilder';

export class ToolBarBuilder {

  private toolbar: IIconButton[] = [];

  public build(toolBarToBuild: ToolbarTypesEnum): IIconButton[] {

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
    }
    console.log('%c⧭', 'color: #f2ceb6', this.toolbar);
    return this.toolbar;
  }

  private buildTextAlignmentToolBar() {
    this.toolbar = [];
    this.toolbar.push(ButtonBuilder.alignLeftButton());
    this.toolbar.push(ButtonBuilder.alignCenterButton());
    this.toolbar.push(ButtonBuilder.alignJustifyButton());
    this.toolbar.push(ButtonBuilder.alignRightButton());
    console.log('%c⧭', 'color: #f2ceb6', this.toolbar);
  }

  private buildFontToolBar() {
    this.toolbar = [];
    this.toolbar.push(ButtonBuilder.fontSelectionButton());
    this.toolbar.push(ButtonBuilder.fontIncreaseSizeButton());
    this.toolbar.push(ButtonBuilder.fontDecreaseSizeButton());
  }

  private buildColorToolBar() {
    this.toolbar = [];
    this.toolbar.push(ButtonBuilder.setForeColourButton());
    this.toolbar.push(ButtonBuilder.setBackgroundColourButton());
  }
}
