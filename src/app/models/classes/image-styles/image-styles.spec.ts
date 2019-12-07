import { ImageStyles } from "./image-styles";
import { ICssStyles } from "../../interfaces/cssStyle";
import { cssStyleEnum } from "../../enums/cssStylesEnum";

let testImageStyles: ImageStyles;

const checkForStyle = (theStyle: cssStyleEnum, styles: ICssStyles[]): boolean => {
  let styleFound: ICssStyles[] = styles.filter(
    style => (style.pmStyleProperty === theStyle)
  );
  console.log(styleFound);
  return styleFound.length === 1 ? true : false;
};

describe("ImageStyles", () => {
  it("should create an instance", () => {
    expect(new ImageStyles()).toBeTruthy();
  });

  testImageStyles = new ImageStyles();

  describe("ImageStyles New", () => {
    it("Should when called with an empty constructor have a url with a default value", () => {
      expect(testImageStyles.url).toEqual(
        "../../../../assets/images/placeholder-image.png"
      );
    });

    it("Should when called with an empty constructor have a height of default value", () => {
      expect(testImageStyles.height).toEqual(488);
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
    });
  });

  describe("getStyles", () => {
    testImageStyles = new ImageStyles();
    let styles: ICssStyles[] = testImageStyles.getStyles();
    it("should expect an array of length 6 when called with an empty constructor", () => {
      expect(styles.length).toEqual(6);
    });

    it("should contain a style element for background colour", () => {
      let styleCheck: boolean = checkForStyle(cssStyleEnum.backgroundColor,styles);
      expect(styleCheck).toBe(true);
    });

    it("should contain a style element for height", () => {
      let styleCheck: boolean = checkForStyle(cssStyleEnum.height, styles);
      expect(styleCheck).toBe(true);
    });

    it("should contain a style element for width", () => {
      let styleCheck: boolean = checkForStyle(cssStyleEnum.width, styles);
      expect(styleCheck).toBe(true);
    });
    it("should contain a style element for top", () => {
      let styleCheck: boolean = checkForStyle(cssStyleEnum.top, styles);
      expect(styleCheck).toBe(true);
    });
    it("should contain a style element for left", () => {
      let styleCheck: boolean = checkForStyle(cssStyleEnum.left, styles);
      expect(styleCheck).toBe(true);
    });
    it("should contain a style element for url", () => {
      let styleCheck: boolean = checkForStyle(cssStyleEnum.url, styles);
      expect(styleCheck).toBe(true);
    });
  });

  describe("Setters and Getters", () => {
    testImageStyles = new ImageStyles();
    it("should when setting a property of background colour set the value to the input value", () => {
      let testValue = "rgba(1,1,1,1)";
      testImageStyles.backgroundColour = testValue;
      expect(testImageStyles.backgroundColour).toEqual(testValue);
    });
    it("should when setting a property of height set the value to the input value", () => {
      let testValue = 500;
      testImageStyles.height = testValue;
      expect(testImageStyles.height).toEqual(testValue);
    });
    it("should when setting a property of width set the value to the input value", () => {
      let testValue = 450;
      testImageStyles.width = testValue;
      expect(testImageStyles.width).toEqual(testValue);
    });
    it("should when setting a property of top set the value to the input value", () => {
      let testValue = 200;
      testImageStyles.top = testValue;
      expect(testImageStyles.top).toEqual(testValue);
    });
    it("should when setting a property of left set the value to the input value", () => {
      let testValue = 100;
      testImageStyles.left = testValue;
      expect(testImageStyles.left).toEqual(testValue);
    });
    it("should when setting a property of url set the value to the input value", () => {
      let testValue = "http://test";
      testImageStyles.url = testValue;
      expect(testImageStyles.url).toEqual(testValue);
    });
  });

  describe("Increment Decrement Size",() => {
    it("should increment / decrement the height and width by the amount", () => {
      testImageStyles = new ImageStyles();
      testImageStyles.height = 400;
      testImageStyles.width = 400;
      testImageStyles.incrementDecrementSize(20);
      expect(testImageStyles.height).toEqual(420);
      expect(testImageStyles.width).toEqual(420);
      testImageStyles.incrementDecrementSize(-30);
      expect(testImageStyles.height).toEqual(390);
      expect(testImageStyles.width).toEqual(390);
    });
  });

  describe("Increment Decrement Top", () => {
    it("should increment / decrement the top by the amount", () => {
      testImageStyles = new ImageStyles();
      testImageStyles.top = 10;
      testImageStyles.moveUpDownByAmount(5);
      expect(testImageStyles.top).toEqual(15);
      testImageStyles.moveUpDownByAmount(-7);
      expect(testImageStyles.top).toEqual(8);
    });
  });

  describe("Increment Decrement Left", () => {
    it("should increment / decrement the left by the amount", () => {
      testImageStyles = new ImageStyles();
      testImageStyles.left = 10;
      testImageStyles.moveLeftRightByAmount(5);
      expect(testImageStyles.left).toEqual(15);
      testImageStyles.moveLeftRightByAmount(-7);
      expect(testImageStyles.left).toEqual(8);
    });
  });

});
