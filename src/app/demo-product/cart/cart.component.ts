import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { TopBar } from '../product-top-bar/TopBar';
import { CartService } from '../cart.service';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-cart',
    standalone: true,
    imports: [
        CommonModule,
        NavigationBarComponent,
        TopBar,
        RouterLink,
        ReactiveFormsModule,
    ],
    template: `
        <app-navigation-bar />
        <app-top-bar />
        <div class="mt-4 p-4">
            <p class="text-xl">Cart</p>
            <a routerLink="/shipping" class="text-blue-800">Shipping Prices</a>
            <div
                class="flex justify-between mt-2 bg-slate-400 p-2 rounded-md"
                *ngFor="let item of items"
            >
                <span>{{ item.name }}</span>
                <span>{{ item.price | currency }}</span>
            </div>

            <form
                [formGroup]="checkoutForm"
                (ngSubmit)="onSubmit()"
                class="grid gap-2 mt-4"
            >
                <div class="grid gap-2">
                    <label for="name">NAME</label>
                    <input
                        type="text"
                        placeholder="Enter name"
                        id="name"
                        formControlName="name"
                        class="border border-slate-700 rounded-md"
                    />
                </div>
                <div class="grid gap-2">
                    <label for="address">ADDRESS</label>
                    <input
                        type="text"
                        placeholder="Enter address"
                        id="address"
                        formControlName="address"
                        class="border border-slate-700 rounded-md"
                    />
                </div>

                <button
                    class="bg-blue-500 px-4 py-1 rounded-xl text-white hover:bg-blue-700 mt-2 mx-auto"
                    type="submit"
                >
                    Purchase
                </button>
            </form>
        </div>
    `,
    styleUrls: ['./cart.component.css'],
})
export class CartComponent {
    items = this.cartService.getItems();

    checkoutForm = this.formBuilder.group({
        name: '',
        address: '',
    });

    constructor(
        private cartService: CartService,
        private formBuilder: FormBuilder
    ) {}

    onSubmit() {
        this.items = this.cartService.clearCart();
        console.warn('Your order has been submitted', this.checkoutForm.value);
        this.checkoutForm.reset();
    }
}
