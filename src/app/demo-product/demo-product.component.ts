import { Component } from '@angular/core';
import { TopBar } from './product-top-bar/TopBar';
import { ProductList } from './product-list/ProductList';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterModule, TopBar, ProductList],
    template: `
        <div class="mt-8 max-w-lg mx-auto">
            <router-outlet />
        </div>
    `,
    styles: [],
})
export class DemoProductComponent {}
