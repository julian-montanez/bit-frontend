import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInfo } from './delete-info';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DeleteInfo', () => {
  let service: DeleteInfo;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [DeleteInfo],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    service = TestBed.inject(DeleteInfo)
    httpMock = TestBed.inject(HttpTestingController)
  });

  afterEach(()=>{
    httpMock.verify()
  })

  it('should servive delete-info', () => {
    expect(service).toBeTruthy();
  });

  it("deberia borrar un usuario",()=>{
    //arrange
    const mockResponse = {}
    const mockId = "id delete"
    //act
    service.deleteInfoById(mockId).subscribe((response)=>{
      expect(response).toEqual(mockResponse)
    })
    const req = httpMock.expectOne(`${service["infoApi"]}/${mockId}`)
    req.flush(mockResponse)
    //assert
    expect(req.request.method).toBe("DELETE")
  })
});