export class ListItem  {
    private _listItems: IListItem [];

    constructor( listItems: IListItem[]){
        this._listItems = listItems;
    }

    get listItems():IListItem[] {
        return this._listItems;
    }
}

export interface IListItem {
    id: number;
    listItem: string;
    isSelected: boolean;
}