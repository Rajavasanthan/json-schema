import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LisJsonComponent } from './lis-json.component';

describe('LisJsonComponent', () => {
  let component: LisJsonComponent;
  let fixture: ComponentFixture<LisJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
