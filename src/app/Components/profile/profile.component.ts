import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Colectie, Poezii } from '../../Models/colectie';
import { ColectiiService } from '../../Services/colectii.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  id:any;
  AddSection:boolean = false;
  AddPoemSection:boolean = false;
  colectiiFromDB: Colectie[] = [];
  newCollection:Colectie = new Colectie();
  newPoem: Poezii = new Poezii;

  constructor(private auth : AuthService,private route: ActivatedRoute,private fireauth: AngularFireAuth, private colectieService: ColectiiService ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.getColections();
  }
  
  logout(){
    this.auth.logout();
  }

  ///metoda ce preia din baza de date toate colectiile din BD
  
  getColections() {
    this.colectieService.getColections().subscribe(result => {
      this.colectiiFromDB = result;
    }
    );
  }
  ///metoda ce preia din baza de date toti userii

  ///metoda care ascunde componenta de add la apasare buton
  showAddSection(): void {
    this.AddSection = !this.AddSection;
  }
  ///metoda care ascunde componenta de add poezie la apasare buton
  showPoemSection(): void {
    this.AddPoemSection = !this.AddPoemSection;
  }
  
  ///metoda de adaugare a unei colectii noi in BD
  
  addColectie() {

    this.newCollection.id = 0;
    for(let i=0;i<this.colectiiFromDB.length;i++){
      if(this.newCollection.id<this.colectiiFromDB[i].id)
      this.newCollection.id = this.colectiiFromDB[i].id
    }
    this.newCollection.id++;

    if(this.newCollection.numeColectie == ''){
      alert('Please enter the name of the collection');
      return;
    }
    if(this.newCollection.numeAutor == ''){
      alert('Please enter the name of the author');
      return;
    }
    if(this.newCollection.dataPublicare == ''){
      alert('Please enter the publication date');
      return;
    }
    if(this.newCollection.cover == ''){
      alert('Please enter the link of the cover');
      return;
    }
    if(this.newCollection.review == ''){
      alert('Please enter a review of the collection');
      return;
    }
    if(this.newCollection.poezii.length == 0){
      alert('Please enter at least one poem to your collection');
      return;
    }
  
    let newColectie = {
       id: this.newCollection.id, 
       numeColectie: this.newCollection.numeColectie,
       numeAutor:this.newCollection.numeAutor,
       dataPublicare:this.newCollection.dataPublicare,
       cover:this.newCollection.cover,
       review:this.newCollection.review,
       poezii:this.newCollection.poezii
      } ;
   
    this.colectieService.addCollection(newColectie);
    this.showAddSection();
    this.newCollection = new Colectie();
  }


  addPoem(){
    for(let i=0;i<this.newCollection.poezii.length;i++){
      if(this.newPoem.idPoezie<this.newCollection.poezii[i].idPoezie)
      this.newPoem.idPoezie = this.newCollection.poezii[i].idPoezie
    }
    this.newPoem.idPoezie++;

    if(this.newPoem.titlu == ''){
      alert('Please enter a title for your poem');
      return;
    }
    if(this.newPoem.text == ''){
      alert('Please enter your poem');
      return;
    }

    let p:Poezii = {
      idPoezie: this.newPoem.idPoezie,
      titlu:this.newPoem.titlu,
      text:this.newPoem.text
    }
    this.newCollection.poezii.push(p)
    this.showPoemSection();
    this.newPoem = new Poezii();
  }
  

}
