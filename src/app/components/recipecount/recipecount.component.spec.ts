import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RecipecountComponent } from './recipecount.component';

describe('RecipecountComponent', () => {
  let component: RecipecountComponent;
  let fixture: ComponentFixture<RecipecountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipecountComponent ],
      imports: [HttpClientModule, RouterTestingModule]
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
