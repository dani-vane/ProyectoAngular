import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { ServiciosComponent } from './paginas/servicios/servicios.component';
import { BlogComponent } from './paginas/blog/blog.component';
import { ContactanosComponent } from './paginas/contactanos/contactanos.component';
import { LoginComponent } from './paginas/login/login.component';
import { canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const routes: Routes = [
{
  path:'home',
  component: HomeComponent

},
{
  path:'nosotros',
  component: NosotrosComponent
},
{
  path:'servicios',
  component:ServiciosComponent
},
{
  path:'blog',
  component:BlogComponent,
  ...canActivate( ()=> redirectUnauthorizedTo(['/login']))
},
{
  path:'contactanos',
  component:ContactanosComponent
},
{
  path:'login',
  component:LoginComponent
 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
