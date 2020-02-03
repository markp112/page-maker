import { action } from '@storybook/addon-actions';
import {} from '@storybook/addon-notes'
import { linkTo } from '@storybook/addon-links';
import { APP_INITIALIZER } from "@angular/core";
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronCircleDown } from  '@fortawesome/free-solid-svg-icons';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { DropDownComponent } from '@app/modules/shared/drop-down/drop-down/drop-down.component';
import { IListItem, ListItem } from '@app/modules/shared/drop-down/drop-down/models/model'

const data: IListItem = {
    id: 4,
    listItem: "14",
    isSelected: false
}


export const listItem: IListItem[] =
  [
    {
      id: 1,
      listItem: "8",
      isSelected: false
    },
    {
      id: 2,
      listItem: "10",
      isSelected: false
    },
    {
      id: 3,
      listItem: "12",
      isSelected: false
    },
];

export const listItemLarge: IListItem[] = [];
listItemLarge.push(data);
listItemLarge.push(data);
listItemLarge.push(data);
listItemLarge.push(data);
listItemLarge.push(data);
listItemLarge.push(data);
listItemLarge.push(data);
listItemLarge.push(data);
listItemLarge.push(data);

export const listItemSelected: IListItem[] =
[
  {
    id: 1,
    listItem: "8",
    isSelected: false
  },
  {
    id: 2,
    listItem: "10",
    isSelected: true
  },
  {
    id: 3,
    listItem: "12",
    isSelected: false
  },
];

export default {
  title: 'DropDown',
  component: DropDownComponent,
  parameters: {
    notes: 'The drop down component takes in an array of IListItems and returns the selected item'
  }
};


export const DropDownComp = () => (
{
  component: DropDownComponent,
    props: { listItems: listItem },

});

export const DropDownLargeData = () => (
  {
    component: DropDownComponent,
      props: { listItems: listItemLarge },

  });


export const DropDownItemSelected = () => (
  {
    component: DropDownComponent,
      props: { listItems: listItemSelected,},

  });
