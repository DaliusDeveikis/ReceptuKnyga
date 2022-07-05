import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { RecipecountService } from './recipecount.service';

describe('RecipecountService', () => {
  let service: RecipecountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(RecipecountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
