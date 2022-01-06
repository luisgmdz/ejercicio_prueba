import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import { collection, query, where } from "firebase/firestore";
import {getDocs} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  public add(data: any){
    const addDb = this.firestore.collection('naves')
    return addDb.add(data);
  }

  public update(data: any, idVehicle: any){
    const updateDoc = this.firestore.collection('naves')
    return this.get(idVehicle).then((res: any) => {
      return updateDoc.doc(res.docs[0].id).update(data);
    })
  }

  public get(id: any){

    const vehicle = this.firestore.firestore.collection('naves').where('uid', '==', id)
    return vehicle.get().then((res: any) => {
      return res
    })
  }

  public getAll(){
    const getVehicle =  this.firestore.collection('naves')
    return getVehicle.snapshotChanges().toPromise().then(res => {
      return res
    })
  }

  public delete(idVehiculo: any){
    const delDoc = this.firestore.collection('naves');
    return this.get(idVehiculo).then((res: any) => {
      return delDoc.doc(res.docs[0].id).delete();
    })
  }
}
