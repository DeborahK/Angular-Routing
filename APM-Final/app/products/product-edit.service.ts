// Shared data service for the edit operation
import { Injectable } from '@angular/core';

import { IProduct } from './product';

@Injectable()
export class ProductEditService {
    private currentProduct: IProduct;
    private originalProduct: IProduct;
    private dataIsValid: { [key: string]: boolean } = {};

    get product(): IProduct{
        return this.currentProduct;
    }
    set product(value: IProduct) {
        this.currentProduct = value;
        // Clone the object to retain a copy
        if (!this.originalProduct) {
            this.originalProduct = Object.assign({}, value);
        }
    }

    get isDirty(): boolean {
        return Object.is(this.originalProduct, this.product);
    }

    isValid(path?: string): boolean {
        console.log(this.dataIsValid);
        this.validate();
        if (path) {
            return this.dataIsValid[path]
        }
        return (this.dataIsValid &&
                Object.keys(this.dataIsValid).every(d => this.dataIsValid[d] === true));
    }

    validate(): void {
        console.log("In validate " + Date.now());
        // Clear the validation object
        this.dataIsValid = {};

        // 'info' tab
        if (this.product.productName &&
            this.product.productName.length >= 3 &&
            this.product.productCode) {
            this.dataIsValid['info'] = true;
        } else {
            this.dataIsValid['info'] = false;
        }

        // 'tags' tab
        if (this.product.category &&
            this.product.category.length >= 3) {
            this.dataIsValid['tags'] = true;
        } else {
            this.dataIsValid['tags'] = false;
        }
    }
}
