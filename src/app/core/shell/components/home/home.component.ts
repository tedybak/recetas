import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../../services/receta.service';
import { AuthService } from '../../services/auth.service';
import { IReceta } from '../../interfaces/ireceta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recetas: IReceta [];

  constructor(
    private recetaService : RecetaService,
    private authService: AuthService
  ) { }

  ngOnInit() {
     this.recetaService.getRecetas().subscribe ( data =>{
      this.recetas = data
    })
  }

}
