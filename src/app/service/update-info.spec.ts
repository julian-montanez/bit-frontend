import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInfo } from './update-info';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UpdateInfo', () => {
  let service: UpdateInfo
  let httpMock: HttpTestingController

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UpdateInfo]
    })
    service = TestBed.inject(UpdateInfo)
    httpMock = TestBed.inject(HttpTestingController)
  });


  it('should service update-info', () => {
    expect(service).toBeTruthy();
  });

  it("deveria retornar informacion con el id del post y la categoria", ()=>{
    //arrange
    const mockReponsePrintInfo = {allOk: true, message: `message`, data: {}}
    const mockId = "infoId"
    const mockCateoria = "categoria"

    //act
    service.printInfo(mockCateoria,mockId).subscribe((response)=>{
      expect(response).toEqual(mockReponsePrintInfo)
    })
    const req = httpMock.expectOne(`${service["apiInfo"]}/${mockCateoria}/${mockId}`)
    req.flush(mockReponsePrintInfo)

    //assert
    expect(req.request.method).toBe("GET")
  })

  it("deveria actualizar informacion", ()=>{
    //arrange
    const mockResponeUpdate = {allOk: true, message: `message`, data: {}}
    const mockId = "infoId"
    const mockBody = {nameDessert: "Dessert", ingredients: "ingredients", howToMake: "howToMake", category: "cat", image: "image"}

    //act
    service.updateInfo(mockId, mockBody).subscribe((respuesta)=>{
      expect(respuesta).toEqual(mockResponeUpdate)
    })
    const req = httpMock.expectOne(`${service["apiInfo"]}/${mockId}`)
    req.flush(mockResponeUpdate)

    //assert
    expect(req.request.method).toBe("PUT")
  })
});