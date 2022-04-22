import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
    {path: '', component: HomeComponent}, //Ruta default o ruta vacia, es cuando no tiene un slash en la url
    {path: 'home', component: HomeComponent}, //Ruta normal
    {path: 'login', component: LoginComponent}, 
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NotFoundComponent} //Path de excepcion, por ende va de ultimo de todas la rutas | 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
