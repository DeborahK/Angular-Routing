import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductEditGuard } from './product-edit.guard';

describe('ProductEditGuard', () => {
  let guard: ProductEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ]
    });
    guard = TestBed.inject(ProductEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
