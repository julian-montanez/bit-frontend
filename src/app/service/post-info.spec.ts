import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInfo } from './post-info';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PostInfo', () => {
  let service: PostInfo
  let httpMock: HttpTestingController

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostInfo]
    })
    service = TestBed.inject(PostInfo)
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should service post-info', () => {
    expect(service).toBeTruthy();
  });

  it("deberia crear informacion", ()=>{
    //arrange
    const mockInfoResponse = {allOk: true, message: "info created", data: {}}
    const mockInfoPayload = {nameDessert:"name", ingredients:"ingred", howToMake:"how", category:"cat", image:"img"}
    //act
    service.Pinfo(mockInfoPayload).subscribe((response)=>{
      expect(response).toEqual(mockInfoResponse)
    })
    const req = httpMock.expectOne(`${service["api"]}`)
    req.flush(mockInfoResponse)
    //assert
    expect(req.request.method).toBe("POST")
  })
});