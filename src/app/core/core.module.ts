import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { AboutComponent } from './shell/components/about/about.component';
import { AdminComponent } from './shell/components/admin/admin.component';
import { DetailsComponent } from './shell/components/details/details.component';
import { EditComponent } from './shell/components/edit/edit.component';
import { HomeComponent } from './shell/components/home/home.component';
import { LoginComponent } from './shell/components/login/login.component';
import { NotfoundpageComponent } from './shell/components/notfoundpage/notfoundpage.component';
import { NuevaRecetaComponent } from './shell/components/nueva-receta/nueva-receta.component';
import { HeaderComponent } from './shell/header/header.component';
import { FooterComponent } from './shell/footer/footer.component';
import { MainComponent } from './shell/main/main.component';
import { CoreRoutingModule } from './shell/core-routing.module';

@NgModule({
  declarations: [
    ShellComponent,
    AboutComponent,
    AdminComponent,
    DetailsComponent,
    EditComponent,
    HomeComponent,
    LoginComponent,
    NotfoundpageComponent,
    NuevaRecetaComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [CommonModule, CoreRoutingModule],
  exports: [ShellComponent, CoreRoutingModule]
})
export class CoreModule {}
