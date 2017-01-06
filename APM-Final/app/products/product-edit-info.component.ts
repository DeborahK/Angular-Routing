import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { MessageService } from '../messages/message.service';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './app/products/product-edit-info.component.html'
})
export class ProductEditInfoComponent {
    @ViewChild(NgForm) productForm: NgForm;

    errorMessage: string;

    product: IProduct;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private productService: ProductService,
        private messageService: MessageService) { }

    ngOnInit(): void {
        this.product = this.route.parent.snapshot.data['product'];
    }
}
