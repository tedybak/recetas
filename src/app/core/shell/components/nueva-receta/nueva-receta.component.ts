import { Component, OnInit } from "@angular/core";
import { RecetaService } from "../../services/receta.service";
import {IReceta} from '../'

@Component({
  selector: "app-nueva-receta",
  templateUrl: "./nueva-receta.component.html",
  styleUrls: ["./nueva-receta.component.scss"]
})
export class NuevaRecetaComponent implements OnInit {
  receta = {
    titulo: "zalacain el aventurero",
    descripcion: "zalacain el aventurero",
    preparacion: "zalacain el aventurero",
    ingredientes: "zalacain el aventurero",
    temporada: "zalacain el aventurero"
  };

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    alert("procesando form");
  }
}
