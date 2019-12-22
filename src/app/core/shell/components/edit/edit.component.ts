import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
id:string
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
   this.id =  this.route.snapshot.paramMap.get('id');
   }
   procesarForm(){
    alert("procesando form")
  }

}
