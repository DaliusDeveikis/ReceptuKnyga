import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngridientComponent } from './ingridient.component';

describe('IngridientComponent', () => {
  let component: IngridientComponent;
  let fixture: ComponentFixture<IngridientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngridientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngridientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('Patikrinkite ar komponento html atvaizdavime yra antraštė "Ingridientas"', ()=> {
    let compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('h2').textContent).toContain('Ingridientas')
  })

  it ('Patikrinkite ar komponento klasė teisingai skaičiuoja kainą jei price laukelis yra skaičius ir quantity yra skaičius', ()=> {
    component.quantity = 10
    component.price = 2.5
    expect(component.totalPrice()).toEqual(25)
  })

  it ('Patikrinkite ar komponento klasės metodas totalPrice grąžina null jei price laukelis yra null, o quantity yra skaičius', ()=> {
    component.quantity = 10
    component.price = null
    expect(component.totalPrice()).toBeNull()
  })

 it ('Patikrinkite ar komponente priskyrus pavadinimą jis yra atvaizduojamas komponento HTML faile', ()=> {
    component.name = "Bulves"
    let compiled = fixture.debugElement.nativeElement
    fixture.detectChanges();
    expect(compiled.querySelector('.ingdridient-name').textContent).toContain('Bulves')
  })

  it ('Patikrinkite ar komponentui priskyrus quantity ir price atsiranda užrašas su teisingu skaičiu', ()=> {
    component.quantity = 10
    component.price = 2.5
    component.totalPrice()
    let compiled = fixture.debugElement.nativeElement
    fixture.detectChanges();
    expect(compiled.querySelector('.ingdridient-result').textContent).toContain("25");
  })

  it ('Patikrinkite ar komponentui priskyrus quantity, o price palikus null nerodomas kainos laukelis', ()=> {
    component.quantity = 10
    component.price = null
    let compiled = fixture.debugElement.nativeElement
    fixture.detectChanges();
    expect(compiled.querySelector('.ingdridient-result')).toBeNull()
  })

});
