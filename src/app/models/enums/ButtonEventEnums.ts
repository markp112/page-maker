export enum ButtonEventEnums {
  //formatters

  FontFamily,
  ForeColour,
  BackgroundColour,
  IncreaseFontSize,
  DecreaseFontSize,
  ImageBackgroundColour,
  ImageIncreaseSize,
  ImageDecreaseSize,
  ImageUp,
  ImageDown,
  ImageLeft,
  ImageRight,
  //editing commands
  Save,
  Edit,
  UpdateRecord,
  RetrieveSavedData,
  UploadUrl,
  UploadFile,
  Publish,
  Cancel,

  // alignment selectors
  HorizontalAlignmentChanged,
  VerticalAlignmentChanged,
  //font style filters
  FontTypeDisplay = "display",
  FontTypeMonospace = "monospace",
  FontTypeHandwriting = "handwriting",
  FontTypeSerif = "serif",
  FontTypeSansSerif = "sans-serif",
  // alignement formatters
  VerticalAlignTop = "vertical-align-top",
  VerticalAlignBottom = "vertical-align-bottom",
  VerticalAlignCenter = "vertical-align-centre",
  AlignLeft = "align-content-left",
  AlignRight = "align-content-right",
  AlignCenter = "align-content-center",
  Justify = "text-align-justify"
}
