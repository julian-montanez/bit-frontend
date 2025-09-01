import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersRegistered } from '../../../service/users-registered';
import { SignUp } from './sign-up';
import { of } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

fdescribe('SignUp', () => {
  let component: SignUp;
  let fixture: ComponentFixture<SignUp>;
  let usersRegisteredServiceSpy : jasmine.SpyObj<UsersRegistered>

  const userRMock = {
    putUser: jasmine.createSpy('putUser')
  };

  const routerMock = {
    navigateByUrl: jasmine.createSpy('navigateByUrl')
  };

  beforeEach(async () => {
    const usersRegisteredSpy = jasmine.createSpyObj("userR",["putUser"])
    await TestBed.configureTestingModule({
      imports: [SignUp],
      providers: [{provide: UsersRegistered, useValue: usersRegisteredSpy}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUp);
    component = fixture.componentInstance;
    usersRegisteredServiceSpy = TestBed.inject(UsersRegistered) as jasmine.SpyObj<UsersRegistered>
    fixture.detectChanges();

    component.formSignUp = new FormGroup({
    name: new FormControl("name"),
    email: new FormControl("email"),
    password: new FormControl("password"),
    VPassword: new FormControl("VPassword")
  })
  });

  it('should sign-up', () => {
    expect(component).toBeTruthy();
  });

  it("deberia enviar algo", () => {
    const mockResponse = { allOk: true };
    userRMock.putUser.and.returnValue(of(mockResponse));

    component.submitForm();

    expect(userRMock.putUser).toHaveBeenCalledWith(component.formSignUp.value);
    expect(routerMock.navigateByUrl).toHaveBeenCalledWith('/home');
  });
});