import { IPageMaster } from 'src/app/models/interfaces/pageMaster';
import { pageLayoutTypes } from 'src/app/models/enums/pageLayouts.enum';

export const pageMasterInitial : IPageMaster = {
  pageLayoutCss:  `.template-sq-img-txt  {
    display: grid;
    grid-template-columns: 6fr 6fr;
    grid-template-rows: 1.5fr 0.25fr 5fr;
    grid-template-areas:  ". ."
                          "toolbar toolbar"
                          "image-area text-area";
  };`,
  layoutType: pageLayoutTypes.grid,
  AreaNames:[],

}
