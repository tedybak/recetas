import { Injectable } from "@angular/core";
import { IReceta } from "../interfaces/ireceta";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RecetaService {
  recetaCollection: AngularFirestoreCollection<IReceta>;
  recetaDoc: AngularFirestoreDocument<IReceta>;
  recetas: Observable<IReceta[]>;
  receta: Observable<IReceta>;
  constructor(private afs: AngularFirestore) {
    this.recetaCollection = this.afs.collection("recetas", ref => ref);
  }
  addReceta(receta: IReceta) {
    this.recetaCollection.add(receta);
  }
  getRecetas(): Observable<IReceta[]> {
    this.recetas = this.recetaCollection.snapshotChanges().map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as IReceta;
        data.id = action.payload.doc.id;
        return data;
      });
    });
    return this.recetas;
  }

  getReceta(idReceta: string) {
    this.recetaDoc = this.afs.doc<IReceta>(`recetas/${idReceta}`);
    this.receta = this.recetaDoc.snapshotChanges().map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as IReceta;
        data.id = action.payload.id;
        return data; 
      }
    });
    return this.receta;
  }
  updateReceta(receta: IReceta) {
     this.recetaDoc = this.afs.doc<IReceta>(`recetas/${receta.id}`);
    this.recetaDoc.update(receta);
  }
  deleteReceta(receta: IReceta) {
    this.recetaDoc = this.afs.doc(`recetas/${receta.id}`);
    this.recetaDoc.delete();
  }
}
