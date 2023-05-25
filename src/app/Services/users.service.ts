import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from '../Models/usersCollection';
import { addDoc, collection, collectionData, Firestore, getDoc, doc } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private fs: Firestore,private auth : AuthService) { }


  getUsers(): Observable<User[]>{
    console.log(this.fs);
    const myUsers:any = collection(this.fs,'usersColections');
    return collectionData(myUsers)
  }

  addUser(user: User) {
    const myUser = collection(this.fs, 'usersColections')
    addDoc(myUser, user);
  }

}
 