import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-top-bar',
    standalone: true,
    imports: [RouterLink],
    template: `
        <div
            class="bg-blue-600 flex justify-between items-center top-bar rounded"
        >
            <div class="px-4 py-2 text-white">My Store</div>

            <div class="px-4 py-2">
                <a routerLink="/cart" class="px-3 py-1.5 text-white">
                    <i class="fa-solid fa-cart-shopping"></i> Check out
                </a>
            </div>
        </div>
    `,
})
export class TopBar {}
