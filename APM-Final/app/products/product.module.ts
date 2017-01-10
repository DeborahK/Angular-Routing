import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './product-data';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard, ProductEditGuard } from './product-guard.service';
import { ProductResolver } from './product-resolver.service';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';

import { ProductEditComponent } from './product-edit.component';
import { ProductEditInfoComponent } from './product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit-tags.component';
import { ProductEditService } from './product-edit.service';

// import { AuthGuard } from '../user/auth-guard.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(ProductData),
    RouterModule.forChild([
      {
        path: 'products',
        component: ProductListComponent
      },
      {
        path: 'product/:id',
        resolve: { product: ProductResolver },
        component: ProductDetailComponent
      },
      {
        path: 'productEdit/:id',
        // canDeactivate: [ProductEditGuard],
        resolve: { product: ProductResolver },
        component: ProductEditComponent,
        children: [
          {
            path: 'info',
            component: ProductEditInfoComponent
          },
          {
            path: 'tags',
            component: ProductEditTagsComponent
          },
          {
            path: '',
            redirectTo: 'info',
            pathMatch: 'full'
          },

        ]
      }
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductEditInfoComponent,
    ProductEditTagsComponent,
    ProductFilterPipe
  ],
  providers: [
    ProductService,
    ProductEditService,
    ProductDetailGuard,
    ProductEditGuard,
    ProductResolver
  ]
})
export class ProductModule { }
