import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RecipeDetailsComponent } from './recipe-details.component';

describe('RecipeDetailsComponent', () => {
  let component: RecipeDetailsComponent;
  let fixture: ComponentFixture<RecipeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDetailsComponent ],
      imports: [HttpClientModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it ('antraste turi buti PVM skaiciuokle', ()=> {
  //   let compiled = fixture.debugElement.nativeElement
  //   expect(compiled.querySelector('.title').textContent).toContain('PVM skaiciuokle')
  // })

  // it ('desimties euru PVM turi buti 12.1', ()=> {
  //   component.kaina = 10
  //   expect(component.skaiicuotiPVM()).toEqual(12.1)
  // })

  // it ('PVM atvaizudojamas tuomet kai yra kaina', ()=> {
  //   component.kaina = 10
  //   let compiled = fixture.debugElement.nativeElement
  //   fixture.detectChanges();
  //   expect(compiled.quareSelector('.vat').textContent).toContain('12.1')
  // })

  //  it ('Jei neivesta kaina laukelis neturi buti isvedamas', ()=> {
  //   let compiled = fixture.debugElement.nativeElement
  //   fixture.detectChanges();
  //   expect(compiled.quareSelector('.vat')).toBeNull();
  // })

});
