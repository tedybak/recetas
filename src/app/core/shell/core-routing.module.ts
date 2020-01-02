import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './components/login/login.component';
import { NuevaRecetaComponent } from './components/nueva-receta/nueva-receta.component';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "nueva", component: NuevaRecetaComponent, canActivate:[AuthGuard] },
  { path: "about", component: AboutComponent },
  { path: "admin", component: AdminComponent, canActivate:[AuthGuard] },
  { path: "details/:id", component: DetailsComponent },
  { path: "edit/:id", component: EditComponent , canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'} ) ],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
