import { Component, OnInit } from "@angular/core";
import { RecetaService } from "../../services/receta.service";
import { IReceta } from "../../interfaces/ireceta";
import { AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: "app-nueva-receta",
  templateUrl: "./nueva-receta.component.html",
  styleUrls: ["./nueva-receta.component.scss"]
})
export class NuevaRecetaComponent implements OnInit {

  receta : IReceta =  {
    id: '',
    titulo: '',
    descripcion: '',
    preparacion: '',
    ingredientes: '',
    temporada: '',
    fechaPublicacion: 0,
    userId:'',
    userNombre:''
  };

  constructor(
    private authService : AuthService,
    private recetaService : RecetaService,
    private router: Router

  ) {}

  ngOnInit() {}

  onSubmit({value} : {value: IReceta}) {
     value.fechaPublicacion =  (new Date().getTime())
     this.authService.getAuth().subscribe ( user =>{
       value.userId = user.uid;
       value.userNombre = user.displayName;
       this.recetaService.addReceta(value)
     })
     this.router.navigate([['/']])
  }
}
