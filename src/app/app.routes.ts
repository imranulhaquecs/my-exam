import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'products', loadChildren: () => import('./modules/products/products-routing.module').then(x => x.ProductsRoutingModule) },
    { path: 'home', component: AppComponent }
];
