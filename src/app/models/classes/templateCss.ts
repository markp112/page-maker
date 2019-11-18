export enum classTypes {
    Tag,
    Class,
    Id
}

export class templateCss {
    className: string;
    classType: classTypes;
    css: string; 
}