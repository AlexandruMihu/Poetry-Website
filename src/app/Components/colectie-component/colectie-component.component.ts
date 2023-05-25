import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColectiiService } from 'src/app/Services/colectii.service';

@Component({
  selector: 'app-colectie-component',
  templateUrl: './colectie-component.component.html',
  styleUrls: ['./colectie-component.component.css']
})
export class ColectieComponentComponent implements OnInit {

  id = '';
  colectii: any;
  colectie: any;
  
  constructor(private route: ActivatedRoute,private colectieService: ColectiiService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getColection(); 
  }

  ///metoda care preia colectia din vectorul de coletii mare pe baza id-ului primit ca parametru
  getColection(){
    this.colectieService.getColections().subscribe(result => {
      this.colectii = result;
      let index = this.colectii.findIndex((colectie: { id: string; }) => colectie.id == this.id);
      if (index > -1) {
        this.colectie = this.colectii[index];

        //aici modificam toate poeziile si inlocuim "\n" cu \n ca sa poata vedea line break-urile
        for(let i = 0;i<this.colectie.poezii.length;i++){
          this.colectie.poezii[i].text = this.colectie.poezii[i].text.replaceAll('\\n','\n')
        }
      }
    }) 
  }
}
