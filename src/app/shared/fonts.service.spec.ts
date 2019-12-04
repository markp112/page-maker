import { TestBed } from '@angular/core/testing';
import { FontsService } from './fonts.service';
import { HttpClientModule } from '@angular/common/http';


describe('FontsService', () => {
  let fontsService: FontsService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [FontsService]

  }));

  // fontsService = TestBed.get(FontsService);

  it('should be created', () => {
    const service: FontsService = TestBed.get(FontsService);
    expect(service).toBeTruthy();
  });


// describe('getFontNames', () => {
//   it("should return an array of strings containing font names", () => {
//     // const fonts = ["Acme", "Actor", "Aladin", "Alef", "Actor"];
//     // spyOn(fontsService,'getFontNames').and.returnValue(fonts);
//     // let response = fontsService.getFontNames();
//     // expect(response).toEqual(fonts);
//     }
//   )
// })


});

