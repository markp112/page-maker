export interface IGooglefont {
  kind: string;
  items: Item[];
}

export interface Item {
  kind: string;
  family: string;
  category: string;
  variants: string[];
  subsets: string[];
  version: string;
  lastModified:string;
  files: Files;
}

export interface Files {
  regular?: string;
  italic?: string;
  "100"?: string;
  "100italic"?: string;
  "200"?: string;
  "200italic"?: string;
  "300"?: string;
  "300italic"?: string;
  "500"?: string;
  "500italic"?: string;
  "600"?: string;
  "600italic"?: string;
  "700"?: string;
  "700italic"?: string;
  "800"?: string;
  "800italic"?: string;
  "900"?: string;
  "900italic"?: string;
}
