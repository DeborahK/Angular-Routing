import { Component } from '@angular/core';

import { IProduct } from './product';
import { ProductEditService } from './product-edit.service';

@Component({
    templateUrl: './app/products/product-edit-info.component.html'
})
export class ProductEditInfoComponent {
    errorMessage: string;

    get product(): IProduct {
        return this.productEditService.product;
    }

    constructor(private productEditService: ProductEditService) { }

    ngOnInit(): void {
        // Watch for changes to the form
    }
}
