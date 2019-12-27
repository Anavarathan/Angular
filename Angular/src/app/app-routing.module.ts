import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { HomeComponent } from 'src/app/home/home.component';
import { FeaturesComponent } from './features/features.component';
import { PriceComponent } from './price/price.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'navbar', component: NavBarComponent,
    children: [
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'feature', component: FeaturesComponent
      },
      {
        path: 'price', component: PriceComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
