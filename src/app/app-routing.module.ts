import { EditprofileComponent } from './components/user/editprofile/editprofile.component';
//import { NologinGuard } from './guards/nologin.guard';
import { Not404Component } from './components/not404/not404.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { AvoleoComponent } from './components/panel/avoleo/avoleo.component';
import { AvelectricalComponent } from './components/panel/avelectrical/avelectrical.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';




const routes: Routes = [
 {path: '', component: NavbarComponent, children: [
 {path: '', component: HomeComponent},
 {path: 'avaria-a-oleo', component: AvoleoComponent},
 {path: 'avaria-electrica', component: AvelectricalComponent},
 {path: 'panel', component: ProfileComponent},
 {path: 'editar-perfil', component: EditprofileComponent}
  ]},
  {path: 'entrar', component: LoginComponent},
  {path: '**', component: Not404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
