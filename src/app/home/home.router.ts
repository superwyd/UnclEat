import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from '../app.component';
import {PallistComponent} from '../pallist/pallist.component';
import {MenuComponent} from '../menu/menu.component';
import {HomeComponent} from '../home/home.component';

export  const router: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pallist', component: PallistComponent },
  { path: 'menulist', component: MenuComponent }
];

export  const routes: ModuleWithProviders = RouterModule.forRoot(router);
