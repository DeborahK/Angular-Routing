// Shared data service for the edit operation
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { IProduct } from './product';

@Injectable()
export class ProductEditService {
    product: IProduct;
    currentRoute: string;

    private formValidity: { [key: string]: boolean } = {};
    private resolveSub: Subscription;
    private formSub: Subscription;

    allFormsValid(): boolean {
        return Object.keys(this.formValidity).every(key => this.formValidity[key]);
    }

    setup(editForm: NgForm, route: ActivatedRoute): void {
        // Get the current route
        let path = route.snapshot.url[route.snapshot.url.length - 1].path;
        this.currentRoute = path;

        // Watch for changes to the resolve data
        this.resolveSub = route.parent.data.subscribe(data => {
            if (editForm) {
                editForm.reset();
                this.formValidity[path] = false;
            }
            // If it is a parent route, get the data directly
            if (route.children.length) {
                this.product = route.snapshot.data['product'];

            } else { // If it is a child route, get it from the parent
                this.product = route.parent.snapshot.data['product'];
            }
        });

        // Watch for changes to the form
        if (editForm) {
            this.formSub = editForm.valueChanges.subscribe(data => {
                this.formValidity[path] = editForm.valid;
            });
        }
    }

    tearDown(): void {
        this.resolveSub.unsubscribe();
        this.formSub.unsubscribe();
    }
}
