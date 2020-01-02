import { Component, OnInit, Output } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { EventEmitter } from "@angular/core";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private afAuth: AuthService, private router: Router) {
    this.afAuth.currentMessage.subscribe(message => this.message);
  }

  message: boolean;
  userNombre : string;
  userEmail: string;
  userPicture : string;
  userId: string;

  ngOnInit() {}

  onClickFacebook() {
    alert("facebook");
  }
  onClickTwitter() {
    alert("Twitter");
  }
  onClickGoogle() {
    this.afAuth
      .loginWithGoogle()
      .then(resp => {
        this.router.navigate(["/admin"]);
        this.message = true;
        this.afAuth.changeMessage(true);
        this.userNombre = resp.user.displayName;
        this.userEmail = resp.user.email;
        this.userId = resp.user.uid
       })
      .catch(error => {
        //this.flashMessageService.show(error.dh, { cssClass: 'alert-success', timeout: 5000 });
      });
  }


}
