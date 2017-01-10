// Child routing component
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

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

    private resolveSub: Subscription;

    get product(): IProduct {
        return this.productEditService.product;
    }

    private get currentRoute(): string {
        if (this.route.firstChild.snapshot) {
            return this.route.firstChild.snapshot.url.join('');
        }
        return '';
    }

    constructor(private route: ActivatedRoute,
        private router: Router,
        private productService: ProductService,
        public productEditService: ProductEditService,
        private messageService: MessageService) { }

    ngOnInit(): void {
        // // Read the product Id from the route parameter
        // this.route.params.subscribe(
        //     params => {
        //         let id = +params['id'];
        //         this.getProduct(id);
        //     }
        // );

        // Watch for changes to the resolve data
        this.resolveSub = this.route.data.subscribe(data => {
            this.productEditService.product = data['product'];
        });

        // Adjust the title
        if (this.product.id === 0) {
            this.pageTitle = 'Add Product';
        } else {
            this.pageTitle = `Edit Product: ${this.product.productName}`;
        }
    }

    goBack(): void {
        switch (this.currentRoute) {
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
        switch (this.currentRoute) {
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
        if (this.currentRoute === 'info') {
            return true;
        }
        return false;
    }

    disableForward(): boolean {
        if (this.currentRoute === 'tags') {
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
        // Should check for validation errors here
        if (true === true) {
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
