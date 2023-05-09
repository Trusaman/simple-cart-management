import { Routes } from '@angular/router';
import { ProductList } from './product-list/ProductList';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SpecificProductComponent } from './specific-product/specific-product.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

export const routes: Routes = [
    { path: 'product', component: ProductList },
    { path: 'contact', component: ContactComponent },
    { path: 'cart', component: CartComponent },
    { path: 'shipping', component: ShippingComponent },
    { path: 'products/:productId', component: SpecificProductComponent },
    { path: '', redirectTo: '/product', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];
