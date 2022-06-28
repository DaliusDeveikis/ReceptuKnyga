import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIngridientsComponent } from './add-ingridients.component';

describe('AddIngridientsComponent', () => {
  let component: AddIngridientsComponent;
  let fixture: ComponentFixture<AddIngridientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIngridientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddIngridientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
