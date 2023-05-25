import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { Colectie, Poezii } from '../../Models/colectie';
import { ColectiiService } from '../../Services/colectii.service';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nume: string = '';
  anyColectie: any;
  colectiiFromDB: Colectie[] = [];

  constructor(private router: Router, private colectieService: ColectiiService, private auth: AuthService) { }

  ngOnInit(): void {
    this.getColections()
  }

  getColections() {
    this.colectieService.getColections().subscribe(result => {
      this.colectiiFromDB = result;
    }
    );
  }
}
