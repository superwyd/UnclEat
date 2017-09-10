import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PallistComponent } from './pallist.component';

describe('PallistComponent', () => {
  let component: PallistComponent;
  let fixture: ComponentFixture<PallistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PallistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
