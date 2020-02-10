import { action } from '@storybook/addon-actions';
import { CommonModule} from '@angular/common';

import { APP_INITIALIZER } from "@angular/core";
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFont } from  '@fortawesome/free-solid-svg-icons';
import { moduleMetadata } from '@storybook/angular';
import  { FontComponent } from './font.component'
import { IconButtonComponent } from '@app/components/icon-button/icon-button.component'
import { DropDownModule} from '@modules/shared/drop-down/drop-down.module'
import { IListItem } from '../../drop-down/drop-down/models/model';
import { FontDropDownComponent } from '@app/components/font-drop-down/font-drop-down.component'

export const fontData:IListItem[] = createFontSizes();

export default {
  title: 'Font Toolbar',
  excludeStories: /.*Data$/,
  component: FontComponent,
  decorators: [
    moduleMetadata({
      imports:[
        FontAwesomeModule,
        CommonModule,
        DropDownModule
      ],
      declarations:[
        IconButtonComponent,
        FontDropDownComponent,

      ],
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => {
            return async () => {
              // Add the necessary icons inside the initialiser body.
              iconLibrary.addIcons(faFont);
            };
          },
          // When using a factory provider you need to explicitly specify its
          // dependencies.
          deps: [ FaIconLibrary ],
          multi: true,
        },
      ],
    })

  ],
  parameters: {

    notes: 'The drop down component takes in an array of IListItems and returns the selected item'
  }
};




export const FontToolbar = () => (
{
  component: FontComponent,
  props: {  }

});

function createFontSizes(): IListItem[] {
  let listItems: IListItem[] = [];
  let id: 0;
  for (let fontSize = 6; fontSize < 74; fontSize +=2){
    let fontItem:IListItem ={
      id: id,
      isSelected: fontSize === 16 ? true : false,
      listItem: fontSize.toString(),
    }
    listItems.push(fontItem);
    id++;
  }
  return listItems;
}
