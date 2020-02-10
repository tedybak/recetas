import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { RecetaService } from '../../services/receta.service';
import { IReceta } from '../../interfaces/ireceta';
import { AuthService} from '../../services/auth.service';

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  id: string;
  receta;
  userId;
  isOwner: boolean; //con esta propiedd comprobamos que el usuario es el owner de la receta
  constructor(
    private route: ActivatedRoute,
    private recetaService: RecetaService,
    private authService : AuthService
    
    ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.receta = this.recetaService.getReceta(this.id).subscribe(data =>{
      this.receta = data;
    });
    this.userId = this.authService.getAuth().subscribe( usuario =>{
      this.userId = usuario;
    })

    if ( this.receta.userId == this.userId.uid) {
      this.isOwner = true;
    }

  }
  onClickDelete() {
    
  }
}
