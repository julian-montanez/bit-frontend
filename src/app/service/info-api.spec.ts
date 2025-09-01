import { TestBed } from '@angular/core/testing';

import { InfoApi } from './info-api';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('InfoApi', () => {

  let service: InfoApi;
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers:[InfoApi],
        imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(InfoApi);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    httpMock.verify()
  })

  it('should service info-api', () => {
    expect(service).toBeTruthy();
  });

  it("deberia retornar toda la informacion", ()=>{
    //arrange
    const mockData = {
        allOk: true,
        message: "infoOK",
        data: []
    }

    //act
    service.getinfo().subscribe((response)=>{
        expect(response).toEqual(mockData)
    })
    const req = httpMock.expectOne(`${service["infoApi"]}`)
    req.flush(mockData)

    //assert
    expect(req.request.method).toBe("GET")
  })

  it("deberia retornar informacion por el id del usuario", ()=>{
    //arrange
    const mockDataById = {allOk: true, message:"message", data:{}}
    const mockId = "id"

    //act
    service.infoPost(mockId).subscribe((response)=>{
      expect(response).toEqual(mockDataById)
    })
    const req = httpMock.expectOne(`${service["infoApi"]}/${mockId}`)
    req.flush(mockDataById)

    //assert
    expect(req.request.method).toBe("GET")
  })

  // it(" ????? ", ()=>{
  //   //arrange
  //   const mockDataById = {allOk: true, message:"message", data:{}}
  //   const mockId = "id"

  //   //act
  //   service.getInfoId(mockId).subscribe((response)=>{})
  //   const req = httpMock.expectOne(`${service["infoApi"]}/${mockId}`)
  //   req.flush(mockDataById)

  //   //assert
  //   expect(req.request.method).toBe("GET")
  // })
});