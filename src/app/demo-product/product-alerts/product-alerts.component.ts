import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../Product';

@Component({
    selector: 'app-product-alerts',
    standalone: true,
    imports: [CommonModule],
    template: `
        <p *ngIf="product && product.price && product.price > 700">
            <button
                class="bg-blue-500 mt-3 px-4 py-1 rounded-xl text-white hover:bg-blue-700"
                type="button"
                (click)="notify.emit()"
            >
                Notify me
            </button>
        </p>
    `,
    styles: [],
})
export class ProductAlertsComponent {
    @Input() product?: Product;
    @Output() notify = new EventEmitter();
}
