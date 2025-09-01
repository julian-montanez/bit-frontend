import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInfo } from './create-info';

describe('CreateInfo', () => {
  let component: CreateInfo;
  let fixture: ComponentFixture<CreateInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});