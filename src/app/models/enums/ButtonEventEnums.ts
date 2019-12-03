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
  //font styels
  FontTypeDisplay,
  FontTypeMonospace,
  FontTypeHandwriting,
  FontTypeSerif,
  FontTypeSansSerif,
  // alignment formatters
  HorizontalAlignmentChanged,
  VerticalAlignmentChanged,
  VerticalAlignTop = 'vertical-align-top',
  VerticalAlignBottom = 'vertical-align-bottom',
  VerticalAlignCenter = 'vertical-align-centre',
  AlignLeft = 'align-content-left',
  AlignRight = 'align-content-right',
  AlignCenter = 'align-content-center',
  Justify = 'text-align-justify'
}
