import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Auth } from 'src/Auth.guard';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovicesComponent } from './movices/movices.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NetworkComponent } from './network/network.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PepoleComponent } from './pepole/pepole.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { RegisterComponent } from './register/register.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
{path : '' , redirectTo:'home' , pathMatch:'full'},
{path:'home' ,canActivate:[Auth], component:HomeComponent},
{path : 'about' ,canActivate:[Auth], component:AboutComponent},
{path : 'tv'  ,canActivate:[Auth],component:TvComponent},
{path : 'network' ,canActivate:[Auth], component:NetworkComponent},
{path: 'movice' ,canActivate:[Auth], component:MovicesComponent},
{path: 'getDetail/:id' ,canActivate:[Auth], component:MovieDetailsComponent},
{path:'getTvDetails/:id' ,canActivate:[Auth], component:TvDetailsComponent },
{path:'getPersonDetails/:id' , canActivate:[Auth] , component:PersonDetailsComponent},
{
  path: 'settings',
  loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
},
{path :'pepole' ,canActivate:[Auth], component:PepoleComponent},
{path :'register' , component:RegisterComponent },
{path:'login' , component:LoginComponent},
// {path : 'logout',canActivate:[Auth] , component:LogoutComponent},
{path: '**' , component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
