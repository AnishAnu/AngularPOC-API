import { Routes } from '@angular/router';
import { HomeComponent } from './components/home';
import { ContactComponent } from './components/contact';
import { CarrierComponent } from './components/carrier';

export const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full'}, 
// { path: '', component: HomeComponent },
{path: 'contact', component: ContactComponent},
{ path: 'home', component: HomeComponent },
{ path: 'carrier', component: CarrierComponent }
];