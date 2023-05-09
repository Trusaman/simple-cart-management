import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-navigation-bar',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
        <div class="flex justify-around mb-4">
            <a
                class="bg-green-300 px-3 py-1.5 rounded-md hover:bg-green-700 hover:text-white"
                routerLink="/"
                routerLinkActive="active"
            >
                Home
            </a>
            <a
                class="bg-green-300 px-3 py-1.5 rounded-md hover:bg-green-700 hover:text-white"
                routerLink="/contact"
                routerLinkActive="active"
            >
                Contact
            </a>
        </div>
    `,
    styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent {}
