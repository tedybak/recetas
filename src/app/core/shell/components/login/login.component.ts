import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   onClickFacebook(){
     alert("facebook")

   }
   onClickTwitter(){
    alert("Twitter")

  }
  onClickGoogle(){
    alert("Google")

  }

  doLogin(){
    alert("do login")
  }

}
