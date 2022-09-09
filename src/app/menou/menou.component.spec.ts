import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenouComponent } from './menou.component';

describe('MenouComponent', () => {
  let component: MenouComponent;
  let fixture: ComponentFixture<MenouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
