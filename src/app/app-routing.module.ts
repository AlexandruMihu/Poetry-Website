import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { ColectieComponentComponent } from './Components/colectie-component/colectie-component.component';

const routes: Routes = [
  {path: '', redirectTo:'home',pathMatch: 'full'},
  {path: 'home',component: HomeComponent},
  {path: 'about',component: AboutComponent},
  {path: 'login',component: LoginComponent},
  {path: 'signup',component: SignupComponent},
  {path: 'profile/:id',component: ProfileComponent},
  {path: 'colectie-component/:id', component: ColectieComponentComponent},
  {path: '**',component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
