import { Component } from '@angular/core';

import { IProduct } from './product';
import { ProductEditService } from './product-edit.service';

@Component({
    templateUrl: './app/products/product-edit-tags.component.html'
})
export class ProductEditTagsComponent {
    errorMessage: string;
    newTags = '';

    get product(): IProduct {
        return this.productEditService.product;
    }

    constructor(private productEditService: ProductEditService) { }

    // Add the defined tags
    addTags(): void {
        let tagArray = this.newTags.split(',');
        console.log(this.product.tags);
        this.productEditService.product.tags = this.product.tags ? this.product.tags.concat(tagArray) : tagArray;
        this.newTags = '';
    }

    // Remove the tag from the array of tags.
    removeTag(idx: number): void {
        this.productEditService.product.tags.splice(idx, 1);
    }
}
