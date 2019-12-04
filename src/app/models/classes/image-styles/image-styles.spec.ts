import { ImageStyles } from './image-styles';
import { ICssStyles } from '../../interfaces/cssStyle';
let testImageStyles: ImageStyles;
describe('ImageStyles', () => {
  it('should create an instance', () => {
    expect(new ImageStyles()).toBeTruthy();
  });

  testImageStyles = new ImageStyles();

  describe("ImageStyles New", () => {
    it("Should when called with an empty constructor have a url with a default value", () => {
      expect(testImageStyles.url).toEqual("../../../../assets/images/placeholder-image.png");
    });

    it("Should when called with an empty constructor have a height of auto", () => {
      expect(testImageStyles.height).toEqual("auto");
    });

    it("Should when called with an empty constructor have a width with a default value", () => {
      expect(testImageStyles.width).toEqual(650);
    });

    it("Should when called with an empty constructor have a top with a default value", () => {
      expect(testImageStyles.top).toEqual(0);
    });

    it("Should when called with an empty constructor have a left with a default value", () => {
      expect(testImageStyles.left).toEqual(0);
    });

    it("Should when called with an empty constructor have a background colour with a default value", () => {
      expect(testImageStyles.backgroundColour).toEqual("rgba(241,242,244,1)");
    })
  })

  describe ("getStyles", () => {
    it("should expect an array of length 6 when called with an empty constructor", () => {
      let styles: ICssStyles[] = testImageStyles.getStyles();
      expect(styles.length).toEqual(6);
    });


  })

});
