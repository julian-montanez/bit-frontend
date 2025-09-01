import { TestBed } from '@angular/core/testing';

import { UsersRegistered } from './users-registered';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('UsersRegistered', () => {
  let service: UsersRegistered;
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[UsersRegistered]
    });
    service = TestBed.inject(UsersRegistered);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should service users-registered', () => {
    expect(service).toBeTruthy();
  });

  it("deberia realizar un llamado al path /sign-up y registrar un usuario", ()=>{
    //arrange
      const mockRegisterResponse: any = {name:"nombre", email:"correo@email.com", password:"contraseña"}
      const mockPayload: object = {name:"nombre", email:"correo@email.com", password:"contraseña", Vpassword:"Vcontraseña"}
    //act
      service.putUser(mockPayload).subscribe((res:any)=>{
        expect(res).toEqual(mockRegisterResponse)
      })
    //assert
    const req = httpMock.expectOne(`${service["api"]}`)
    req.flush(mockRegisterResponse)
  })
});
