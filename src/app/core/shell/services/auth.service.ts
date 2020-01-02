import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import { resolve } from "url";
import { reject } from "q";
import "rxjs/add/operator/map";
import "rxjs/Rx";
import { map } from "rxjs/operators";
import { BehaviorSubject } from "rxjs/Rx";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private messageSource = new BehaviorSubject(false);
  currentMessage = this.messageSource.asObservable();
  constructor(private afAuth: AngularFireAuth) {}

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }

  logout() {
    this.afAuth.auth.signOut();
   }

  changeMessage(message: boolean) {
    this.messageSource.next(message);
  }
}
