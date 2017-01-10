import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

    get productForm(): FormGroup {
        return this.productEditService.productForm;
    }

    constructor(private productEditService: ProductEditService) { }
}
