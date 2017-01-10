import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IProduct } from './product';
import { ProductEditService } from './product-edit.service';

@Component({
    templateUrl: './app/products/product-edit-info.component.html'
})
export class ProductEditInfoComponent implements OnInit {
    @ViewChild(NgForm) productForm: NgForm;

    errorMessage: string;

    get product(): IProduct {
        return this.productEditService.product;
    }

    constructor(private productEditService: ProductEditService) { }

    ngOnInit(): void {
        // Register the form with the edit service
        this.productEditService.register(this.productForm);
    }
}
