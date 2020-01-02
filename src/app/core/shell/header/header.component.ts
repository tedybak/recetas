import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  message: boolean;
  userNombre:string;
  userEmail: string;
  userPicture : string;
  userId:any;

  isLogin: boolean;


  constructor(private afAuth: AuthService, private router: Router) {}

  ngOnInit() {
    this.afAuth.currentMessage.subscribe(message => (this.message = message));
    this.onComprobarUsuarioLogueado()
   }
  logout() {
    this.afAuth.logout();
    this.afAuth.changeMessage(false);
    this.router.navigate(["/"]);
  }

  onComprobarUsuarioLogueado() {
    this.afAuth.getAuth().subscribe(auth => {
      if(auth){
        this.isLogin = true;
        this.userNombre = auth.displayName;
        this.userEmail = auth.email;
        this.userPicture = auth.photoURL;
        this.userId = auth.uid
      }else{
        this.isLogin = false
      }
    });
  }
}
