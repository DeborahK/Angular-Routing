// Shared data service for the edit operation
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { IProduct } from './product';

@Injectable()
export class ProductEditService {
    product: IProduct;
    productForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.productForm = fb.group({
            infoGroup: fb.group({
                productName: '',
                productCode: '',
                description: ''
            })
        });
    };
}
