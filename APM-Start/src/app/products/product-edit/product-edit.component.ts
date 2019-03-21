import { Component, OnInit } from '@angular/core';

import { MessageService } from '../../messages/message.service';

import { Product, ProductResolved } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
    pageTitle = 'Product Edit';
    errorMessage: string;

    product: Product;
    private dataIsValid: { [key: string]: boolean } = {};

    constructor(
        private productService: ProductService,
        private messageService: MessageService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.route.data.subscribe(data => {
            const resolvedData: ProductResolved = data['resolvedData'];

            this.errorMessage = resolvedData.error;

            this.onProductRetrieved(resolvedData.product);
        });
    }

    onProductRetrieved(product: Product): void {
        this.product = product;

        if (!this.product) {
            this.pageTitle = 'No product found';
        } else {
            if (this.product.id === 0) {
                this.pageTitle = 'Add Product';
            } else {
                this.pageTitle = `Edit Product: ${this.product.productName}`;
            }
        }
    }

    deleteProduct(): void {
        if (this.product.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete(`${this.product.productName} was deleted`);
        } else {
            if (
                confirm(
                    `Really delete the product: ${this.product.productName}?`
                )
            ) {
                this.productService
                    .deleteProduct(this.product.id)
                    .subscribe(
                        () =>
                            this.onSaveComplete(
                                `${this.product.productName} was deleted`
                            ),
                        (error: any) => (this.errorMessage = <any>error)
                    );
            }
        }
    }

    isValid(path?: string): boolean {
        this.validate();

        if (path) {
            return this.dataIsValid[path];
        }
        return (
            this.dataIsValid &&
            Object.keys(this.dataIsValid).every(
                d => this.dataIsValid[d] === true
            )
        );
    }

    saveProduct(): void {
        if (this.isValid()) {
            if (this.product.id === 0) {
                this.productService
                    .createProduct(this.product)
                    .subscribe(
                        () =>
                            this.onSaveComplete(
                                `The new ${this.product.productName} was saved`
                            ),
                        (error: any) => (this.errorMessage = <any>error)
                    );
            } else {
                this.productService
                    .updateProduct(this.product)
                    .subscribe(
                        () =>
                            this.onSaveComplete(
                                `The updated ${
                                    this.product.productName
                                } was saved`
                            ),
                        (error: any) => (this.errorMessage = <any>error)
                    );
            }
        } else {
            this.errorMessage = 'Please correct the validation errors.';
        }
    }

    onSaveComplete(message?: string): void {
        if (message) {
            this.messageService.addMessage(message);
        }

        // Navigate back to the product list
        this.router.navigate(['/products']);
    }

    validate(): void {
        // Clear the validation object
        this.dataIsValid = {};

        // 'info' tab
        if (
            this.product.productName &&
            this.product.productName.length >= 3 &&
            this.product.productCode
        ) {
            this.dataIsValid['info'] = true;
        } else {
            this.dataIsValid['info'] = false;
        }

        // 'tags' tab
        if (this.product.category && this.product.category.length >= 3) {
            this.dataIsValid['tags'] = true;
        } else {
            this.dataIsValid['tags'] = false;
        }
    }
}
