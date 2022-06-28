import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipecountComponent } from './recipecount.component';

describe('RecipecountComponent', () => {
  let component: RecipecountComponent;
  let fixture: ComponentFixture<RecipecountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipecountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipecountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
