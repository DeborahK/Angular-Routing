// Child routing component
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MessageService } from '../messages/message.service';

import { IProduct } from './product';
import { ProductService } from './product.service';
import { ProductEditService } from './product-edit.service';

@Component({
    templateUrl: './app/products/product-edit.component.html',
    styleUrls: ['./app/products/product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
    pageTitle: string = 'Product Edit';
    errorMessage: string;

    get product(): IProduct {
        return this.productEditService.product;
    }

    get enableSave(): boolean {
        return this.productEditService.allFormsValid();
    }

    constructor(private route: ActivatedRoute,
        private router: Router,
        private productService: ProductService,
        private productEditService: ProductEditService,
        private messageService: MessageService) { }

    ngOnInit(): void {
        this.productEditService.setup(null, this.route);

        if (this.product.id === 0) {
            this.pageTitle = 'Add Product';
        } else {
            this.pageTitle = `Edit Product: ${this.product.productName}`;
        }
    }

    goBack(): void {
        switch (this.productEditService.currentRoute) {
            case 'info':
                this.router.navigate(['info'], { relativeTo: this.route });
                break;
            case 'tags':
                this.router.navigate(['info'], { relativeTo: this.route });
                break;
            default:
                this.router.navigate(['info'], { relativeTo: this.route });
        }
    }

    goForward(): void {
        switch (this.productEditService.currentRoute) {
            case 'info':
                this.router.navigate(['tags'], { relativeTo: this.route });
                break;
            case 'tags':
                this.router.navigate(['tags'], { relativeTo: this.route });
                break;
            default:
                this.router.navigate(['tags'], { relativeTo: this.route });
        }
    }

    disableBack(): boolean {
        if (this.productEditService.currentRoute === 'info') {
            return true;
        }
        return false;
    }

    disableForward(): boolean {
        if (this.productEditService.currentRoute === 'tags') {
            return true;
        }
        return false;
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
        if (this.productEditService.allFormsValid()) {
            this.productService.saveProduct(this.product)
                .subscribe(
                () => this.onSaveComplete(`${this.product.productName} was saved`),
                (error: any) => this.errorMessage = <any>error
                );
        } else {
            this.errorMessage = 'Please correct the validation errors.';
        }
    }

    onSaveComplete(message?: string): void {
        if (message) {
            this.messageService.addMessage(message);
        }
        this.router.navigate(['/products']);
    }
}
