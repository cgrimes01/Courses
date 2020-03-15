import { TestBed, async, inject } from '@angular/core/testing';

import { Product.DetailGuard } from './product.detail.guard';

describe('Product.DetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Product.DetailGuard]
    });
  });

  it('should ...', inject([Product.DetailGuard], (guard: Product.DetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
