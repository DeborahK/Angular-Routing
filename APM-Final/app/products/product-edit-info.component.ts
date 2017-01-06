import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { IProduct } from './product';
import { ProductEditService } from './product-edit.service';

@Component({
    templateUrl: './app/products/product-edit-info.component.html'
})
export class ProductEditInfoComponent implements OnInit, OnDestroy {
    @ViewChild(NgForm) productForm: NgForm;
    errorMessage: string;

    get product(): IProduct {
        return this.productEditService.product;
    }

    constructor(private route: ActivatedRoute,
                private productEditService: ProductEditService) { }

    ngOnInit(): void {
        this.productEditService.setup(this.productForm, this.route);
    }

    ngOnDestroy(): void {
        this.productEditService.tearDown();
    }
}
