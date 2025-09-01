import { TestBed } from '@angular/core/testing';

import { LoginServices } from './login-services';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('LoginServices', () => {
  let service: LoginServices;
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[LoginServices]
    });
    service = TestBed.inject(LoginServices);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    sessionStorage.clear()
    httpMock.verify()
  })

  it('should service login-service', () => {
    expect(service).toBeTruthy();
  });

  it("deberia logear un usuario y devolver un token", ()=>{
    //arrange
    const mockResponseLogin = {allOk: true, message: "user found", data: {}}
    const loginPayload = { email: "correo@email.com", password: "contrasena" }

    //act
    service.loginUser(loginPayload).subscribe((respuesta)=>{
      expect(respuesta).toEqual(mockResponseLogin)
    })
    const req = httpMock.expectOne(`${service["api"]}`)
    req.flush(mockResponseLogin)

    //assert
    expect(req.request.method).toBe("POST")
  })

  it("deberia retornar los datos del usuario por el id", ()=>{
    //arrange
    const mockResponseUser = {allOk: true, message: `message `, data: {}}
    const mockId = "idUser"

    //act
    service.userdata(mockId).subscribe((respuesta)=>{
      expect(respuesta).toEqual(mockResponseUser)
    })
    const req = httpMock.expectOne(`${service["apiUser"]}/${mockId}`)
    req.flush(mockResponseUser)

    //assert
    expect(req.request.method).toBe("GET")
  })

  it("", ()=>{})

  it("", ()=>{})

});
