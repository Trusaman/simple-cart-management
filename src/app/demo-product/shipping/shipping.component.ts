import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

@Component({
    selector: 'app-shipping',
    standalone: true,
    imports: [CommonModule, NavigationBarComponent],
    template: `
        <app-navigation-bar />
        <h3 class="font-bold text-lg text-center">Shipping Prices</h3>
        <div
            *ngFor="let shipping of shippingCosts | async"
            class="flex justify-between"
        >
            <span>{{ shipping.type }}</span>
            <span>{{ shipping.price | currency }}</span>
        </div>
    `,
    styles: [],
})
export class ShippingComponent implements OnInit {
    shippingCosts!: Observable<{ type: string; price: number }[]>;

    constructor(private cartService: CartService) {}

    ngOnInit() {
        this.shippingCosts = this.cartService.getShippingPrices();
    }
}
