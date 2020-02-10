import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RecetaService } from '../../services/receta.service';
import { IReceta } from '../../interfaces/ireceta';

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  id: string;
  receta;
  constructor(
    private route: ActivatedRoute,
    private recetaService: RecetaService,
    
    ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.receta = this.recetaService.getReceta(this.id).subscribe(data =>{
      this.receta = data;
    })
  }
  onClickDelete() {
    
  }
}
