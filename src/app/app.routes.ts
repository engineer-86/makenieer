import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';
import { ImprintPageComponent } from './components/imprint-page/imprint-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'service-page', component: ServicesPageComponent },
  { path: 'imprint-page', component: ImprintPageComponent }
];
