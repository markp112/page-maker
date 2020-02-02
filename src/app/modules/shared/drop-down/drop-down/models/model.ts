export class ListItem  {
    private _listItems: IListItem [];

    constructor( listItems: IListItem[]){
        this._listItems = listItems;
    }

    get listItems():IListItem[] {
        return this._listItems;
    }
}
// defines the interface for the content of the drop down list
//
export interface IListItem {
    id: number;                   // unique id of item
    listItem: string;             // oontent to be displayed
    isSelected: boolean;          // current selected item
}
