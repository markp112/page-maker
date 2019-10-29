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
  regular: string;
  italic?: string;
  "500"?: string;
  "600"?: string;
  "700"?: string;
  "800"?: string;
}
