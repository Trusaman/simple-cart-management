import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopBar } from '../product-top-bar/TopBar';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, TopBar, NavigationBarComponent],
    template: ` <app-navigation-bar />
        <app-top-bar />
        <div class="mt-4">
            <p>The telephone number: 0987654321</p>
            <p>The email address: someone@gmail.com</p>
        </div>`,
    styles: [],
})
export class ContactComponent {}
