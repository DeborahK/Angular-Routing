// Shared data service for the edit operation
import { Injectable } from '@angular/core';

import { IProduct } from './product';

@Injectable()
export class ProductEditService {
    product: IProduct;
    currentRoute: string;
}
