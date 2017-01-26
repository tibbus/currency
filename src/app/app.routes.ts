import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrencyComponent } from './currency/currency.component';
import { HomeComponent }  from './home/home.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'rates', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'rates', component: CurrencyComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);