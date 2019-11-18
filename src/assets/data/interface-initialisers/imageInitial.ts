import {IImage} from '../../../app/models/interfaces/image'
export const imageInitial: IImage = {
  container: `grid-area: image-area;
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: center;
              position: relative;
              overflow: hidden;`,
  url: "../../../../assets/images/placeholder-image.png",
  position: {
    top: 0,
    left: 0
  },
  height: 400,
  width: 500,
  backgroundColor: "rgba(241,242,244,1)"
};
