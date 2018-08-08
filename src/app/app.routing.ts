import { Routes, RouterModule } from '@angular/router';
import {TrackerComponent} from './tracker/tracker.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'tracker', component: TrackerComponent },
  { path: '**', component: HomeComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
