import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoApi } from '../../../service/info-api';
import { SecondPage } from './second-page';

describe('SecondPage', () => {
  let component: SecondPage;
  let fixture: ComponentFixture<SecondPage>;
  let infoApiServiceSpy: jasmine.SpyObj<InfoApi>

  beforeEach(async () => {
    const infoApiSpy = jasmine.createSpyObj('infoApi',['getinfo'])
    await TestBed.configureTestingModule({
      imports: [SecondPage],
      providers: [{provide: InfoApi, useValue: infoApiSpy}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondPage);
    component = fixture.componentInstance;
    infoApiServiceSpy = TestBed.inject(InfoApi) as jasmine.SpyObj<InfoApi>
    fixture.detectChanges();
  });

  it('should second-page', () => {
    expect(component).toBeTruthy();
  });
});