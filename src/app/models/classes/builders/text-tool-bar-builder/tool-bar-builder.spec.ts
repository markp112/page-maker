import { ToolBarBuilder} from './tool-bar-builder';
import { IIconButton } from '@app/models/interfaces/icon-button';
import { ToolbarTypesEnum } from 'src/app/models/enums/toolbar-types-enum';

describe('ToolBarBuilder', () => {
  it('should create an instance', () => {
    expect(new ToolBarBuilder()).toBeTruthy();
  });


});

describe('ToolBarBuilder build text Alignment toolbar', () => {
  it('It should build an an array of IIConButtons buttons for a text alignment toolbar ', () => {
    expect(new ToolBarBuilder()).toBeTruthy();

  });

  it('should have a total of four buttons', () => {
    const toolbarBuilder = new ToolBarBuilder();
    let toolBar:IIconButton[] = [];
    console.log("toolbbar = ",toolbarBuilder.build(ToolbarTypesEnum.TextAlignment).length)
    toolBar = toolbarBuilder.build(ToolbarTypesEnum.TextAlignment);
    expect(toolBar.length).toBe(4)
  })


});
