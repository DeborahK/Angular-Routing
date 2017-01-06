import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './app/products/product-edit-tags.component.html'
})
export class ProductEditTagsComponent {
    product: IProduct;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private productService: ProductService) { }

    ngOnInit(): void {
        this.product = this.route.parent.snapshot.data['product'];
    }
}
