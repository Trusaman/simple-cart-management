import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-page-not-found',
    standalone: true,
    imports: [CommonModule],
    template: ` <p>page-not-found!</p> `,
})
export class PageNotFoundComponent {}
