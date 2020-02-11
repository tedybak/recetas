import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { RecetaService } from '../../services/receta.service';
import { IReceta } from '../../interfaces/ireceta';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  idReceta: string;
  receta;
  userLoggedId;
  userRecetaId;
  isOwner: boolean = false; //con esta propiedd comprobamos que el usuario es el owner de la receta

  constructor(
    private route: ActivatedRoute,
    private recetaService: RecetaService,
    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit() {
    this.datosUsuarioLoggued();
    this.datosReceta();
  }

  datosUsuarioLoggued() {
    this.userLoggedId = this.authService.getAuth().subscribe(usuario => {
      this.userLoggedId = usuario.uid;     
    })
  }
  datosReceta() {
    this.idReceta = this.route.snapshot.paramMap.get("id");
    this.receta = this.recetaService.getReceta(this.idReceta).subscribe(data => {
      this.userRecetaId = data.userId;
      this.receta = data;

      // este parte del codigo nos permite comprobar si el usuario logueado es titular del post, si es asi podra editar y borrar
      if(this.userLoggedId == this.userRecetaId){
        this.isOwner = true;
      } 

    });
  }


  onClickDelete() {
    this.recetaService.deleteReceta(this.receta);
    this.router.navigate(['/'])
  }


}
