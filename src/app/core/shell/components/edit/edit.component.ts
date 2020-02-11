import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import { RecetaService } from '../../services/receta.service';
import { AuthService } from '../../services/auth.service';
import { IReceta } from '../../interfaces/ireceta';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

 

id:string
idReceta: string;
recetaData;
userLoggedId;
userRecetaId;
isOwner: boolean = false; //con esta propiedd comprobamos que el usuario es el owner de la receta

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
    private route:ActivatedRoute, 
    private router:Router,
    private recetaService: RecetaService,
    private authService: AuthService,
     ) { }
 
  ngOnInit() {
   this.id =  this.route.snapshot.paramMap.get('id');
   this.datosReceta();
   }
   onSubmit({value} : {value: IReceta}) {
     value.id = this.id
     this.recetaService.updateReceta(value)
     this.router.navigate(['/'])
     
 }

  datosReceta() {
    
    this.idReceta = this.route.snapshot.paramMap.get("id");
    this.recetaData = this.recetaService.getReceta(this.idReceta).subscribe(data => {
      this.userRecetaId = data.userId;
      this.recetaData = data;

      // este parte del codigo nos permite comprobar si el usuario logueado es titular del post, si es asi podra editar y borrar
      if(this.userLoggedId == this.userRecetaId){
        this.isOwner = true;
      } 

    });
  }

}
