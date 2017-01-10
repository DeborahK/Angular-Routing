// Shared data service for the edit operation
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IProduct } from './product';

@Injectable()
export class ProductEditService {
    product: IProduct;
    productForms: NgForm[] = [];

    get productFormsValid(): boolean {
        if (this.productForms.length){
            console.log(this.productForms.length);
            for (let i in this.productForms) {
                console.log("ProductForms: " + JSON.stringify(this.productForms[i].value));
            }
            return this.productForms.every(f => f.valid);
        }
        return false;
    }

    get productFormsDirty(): boolean {
        if (this.productForms){
            return this.productForms.some(f => f.dirty);
        }
        return false;
    }

    register(tabForm: NgForm): void {
        this.productForms.push(tabForm);
    }
}
