import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Colectie } from '../Models/colectie';
import { addDoc, collection, collectionData, collectionSnapshots, Firestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})

export class ColectiiService {


  constructor(private fs: Firestore,private auth : AuthService) { }

  getColections(): Observable<Colectie[]>{
    console.log(this.fs);
    const myCollection:any = collection(this.fs,'colectii');
    return collectionData(myCollection)
  }

  addCollection(colectie: Colectie) {
    const myCollection = collection(this.fs, 'colectii')
    addDoc(myCollection, colectie);
  }

  


 
}
