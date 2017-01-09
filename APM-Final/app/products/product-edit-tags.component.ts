import { Component } from '@angular/core';

import { IProduct } from './product';
import { ProductEditService } from './product-edit.service';

@Component({
    templateUrl: './app/products/product-edit-tags.component.html'
})
export class ProductEditTagsComponent {
    errorMessage: string;

    get product(): IProduct {
        return this.productEditService.product;
    }

    constructor(private productEditService: ProductEditService) { }
}
