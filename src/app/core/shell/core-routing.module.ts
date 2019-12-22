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


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "nueva", component: NuevaRecetaComponent },
  { path: "about", component: AboutComponent },
  { path: "admin", component: AdminComponent },
  { path: "details/:id", component: DetailsComponent },
  { path: "edit/:id", component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),  ],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
