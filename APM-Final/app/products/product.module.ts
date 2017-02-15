import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditGuard } from './product-guard.service';
import { ProductResolver } from './product-resolver.service';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';

import { ProductEditComponent } from './product-edit.component';
import { ProductEditInfoComponent } from './product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit-tags.component';

// import { AuthGuard } from '../user/auth-guard.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: ':id/edit',
        canDeactivate: [ProductEditGuard],
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
          }
        ]
      },
      {
        path: ':id',
        resolve: { product: ProductResolver },
        component: ProductDetailComponent
      },
      {
        path: '',
        component: ProductListComponent
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
    ProductEditGuard,
    ProductResolver
  ]
})
export class ProductModule { }
