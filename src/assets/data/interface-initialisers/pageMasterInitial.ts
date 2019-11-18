import { IPageMaster } from 'src/app/models/interfaces/pageMaster';
import { pageLayoutTypes } from 'src/app/models/enums/pageLayouts.enum';

export const pageMasterInitial : IPageMaster = {
  pageLayoutCss: "",
  layoutType: pageLayoutTypes.grid,
  layouts:[],
  AreaNames:[],

}
