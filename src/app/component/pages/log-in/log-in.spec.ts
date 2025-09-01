import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginServices } from '../../../service/login-services';
import { LogIn } from './log-in';

describe('LogIn', () => {
  let component: LogIn;
  let fixture: ComponentFixture<LogIn>;
  let LoginServicesServiceSpy: jasmine.SpyObj<LoginServices>

  beforeEach(async () => {
    const LoginServicesSpy = jasmine.createSpyObj("login",["loginUser"])
    await TestBed.configureTestingModule({
      imports: [LogIn],
      providers: [{provide: LoginServices, useValue:LoginServicesSpy}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogIn);
    component = fixture.componentInstance;
    LoginServicesServiceSpy = TestBed.inject(LoginServices) as jasmine.SpyObj<LoginServices>
    fixture.detectChanges();
  });

  it('should log-in', () => {
    expect(component).toBeTruthy();
  });
});