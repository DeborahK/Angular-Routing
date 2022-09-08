import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product, ProductResolved } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: Product | null = null;
  errorMessage = '';

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const resolvedData: ProductResolved =
      this.route.snapshot.data['resolvedData'];
    this.errorMessage = String(resolvedData.error);
    this.onProductRetrieved(resolvedData.product);
    console.log('error message', this.errorMessage)
  }

  onProductRetrieved(product: Product | null): void {
    this.product = product;

    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.productName}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }

  doRouting(): void {
    this.router.navigate(
      ['/products'],
      { queryParamsHandling: "preserve", queryParams: { message: '' } }
    );
    // [routerLink]="['/products']"
    // queryParamsHandling="preserve"
  }
}
