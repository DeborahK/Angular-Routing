// Child routing component
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { MessageService } from '../messages/message.service';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './app/products/product-edit.component.html',
    styleUrls: ['./app/products/product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
    pageTitle: string = 'Product Edit';
    errorMessage: string;

    product: IProduct;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private productService: ProductService,
        private messageService: MessageService) { }

    ngOnInit(): void {
        this.product = this.route.snapshot.data['product'];

        if (this.product.id === 0) {
            this.pageTitle = 'Add Product';
        } else {
            this.pageTitle = `Edit Product: ${this.product.productName}`;
        }
    }

    goBack(): void {

    }

    goForward(): void {

    }

    isBackValid(): boolean {
        return true;
    }

    isForwardValid(): boolean {
        return true;
    }

    deleteProduct(): void {
        if (this.product.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete(`${this.product.productName} was deleted`);
        } else {
            if (confirm(`Really delete the product: ${this.product.productName}?`)) {
                this.productService.deleteProduct(this.product.id)
                    .subscribe(
                    () => this.onSaveComplete(`${this.product.productName} was deleted`),
                    (error: any) => this.errorMessage = <any>error
                    );
            }
        }
    }

    saveProduct(): void {
        if (this.productForm.dirty && this.productForm.valid) {
            this.productService.saveProduct(this.product)
                .subscribe(
                () => this.onSaveComplete(`${this.product.productName} was saved`),
                (error: any) => this.errorMessage = <any>error
                );
        } else if (!this.productForm.dirty) {
            this.onSaveComplete();
        }
    }

    onSaveComplete(message?: string): void {
        // Reset the form to clear the flags
        this.productForm.reset();
        if (message) {
            this.messageService.addMessage(message);
        }

        this.router.navigate(['/products']);
    }
}
