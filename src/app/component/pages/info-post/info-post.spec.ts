import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPost } from './info-post';

describe('InfoPost', () => {
  let component: InfoPost;
  let fixture: ComponentFixture<InfoPost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});