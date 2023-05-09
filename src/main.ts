import { bootstrapApplication } from '@angular/platform-browser';
import { DemoProductComponent } from './app/demo-product/demo-product.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/demo-product/routes';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(DemoProductComponent, {
    providers: [provideRouter(routes), importProvidersFrom(HttpClientModule)],
}).catch((err) => console.error(err));
