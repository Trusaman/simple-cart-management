import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../Product';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-product-detail',
    standalone: true,
    imports: [CommonModule, ProductAlertsComponent, RouterLink],
    template: `
        <div
            class="px-4 py-2 mb-4 pb-4 text-gray-800 border border-red-500 rounded-xl bg-white"
        >
            <h3>
                <a
                    title="Product detail"
                    class="text-blue-800 font-medium"
                    [routerLink]="['/products', product?.id]"
                >
                    {{ product?.name }}
                </a>
            </h3>
            <p *ngIf="product && product.description">
                Description:
                {{ product.description }}
            </p>
            <button
                class="bg-blue-500 px-4 py-1 rounded-xl text-white hover:bg-blue-700 mt-2"
                (click)="share()"
            >
                Share
            </button>

            <app-product-alerts [product]="product" (notify)="onNotify()" />
        </div>
    `,
    styles: [],
})
export class ProductDetailComponent {
    @Input() product?: Product;

    share() {
        alert(`The ${this.product?.name} has been shared!`);
    }

    onNotify() {
        alert(
            `You will be notified when the ${this.product?.name} goes on sale`
        );
    }
}
