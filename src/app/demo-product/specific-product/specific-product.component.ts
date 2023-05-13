import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { TopBar } from '../product-top-bar/TopBar';
import { Product } from '../Product';
import { ActivatedRoute } from '@angular/router';
import { products } from '../Products';
import { CartService } from '../cart.service';

@Component({
    selector: 'app-specific-product',
    standalone: true,
    imports: [CommonModule, NavigationBarComponent, TopBar],
    template: `
        <app-navigation-bar />
        <app-top-bar />
        <div *ngIf="product" class="mt-2">
            <h1 class="font-bold text-lg">{{ product.name }}</h1>
            <h2>{{ product.price | currency }}</h2>
            <p>{{ product.description }}</p>
            <button
                class="bg-blue-400 px-4 py-1 rounded-xl text-white hover:bg-blue-700 mt-2"
                (click)="addToCart(product)"
            >
                Buy
            </button>
        </div>
    `,
    styleUrls: ['./specific-product.component.css'],
})
export class SpecificProductComponent implements OnInit {
    product: Product | undefined;

    constructor(
        private route: ActivatedRoute,
        private cartService: CartService
    ) {}

    ngOnInit(): void {
        const routeParams = this.route.snapshot.paramMap;

        const productIdFromRoute = Number(routeParams.get('productId'));

        this.product = products.find(
            (product) => product.id === productIdFromRoute
        );
    }

    addToCart(product: Product) {
        this.cartService.addToCart(product);
        alert('Your product has been added to the cart!');
    }
}
