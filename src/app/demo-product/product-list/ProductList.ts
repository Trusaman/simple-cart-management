import { Component } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../Product';
import { products } from '../Products';
import { NgForOf } from '@angular/common';
import { TopBar } from '../product-top-bar/TopBar';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [
        ProductDetailComponent,
        NgForOf,
        TopBar,
        NavigationBarComponent,
        RouterLink,
    ],
    template: `
        <app-navigation-bar />
        <app-top-bar />
        <div class="product-list">
            <div class="px-4 py-2 text-gray-500">Products</div>
            <div
                class="grid grid-cols-1 gap-y-4"
                *ngFor="let product of products"
            >
                <app-product-detail
                    [product]="product"
                    [title]="product.name + 'details'"
                />
            </div>
        </div>
    `,
})
export class ProductList {
    products = [...products];
}
