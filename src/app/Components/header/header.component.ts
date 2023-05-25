import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router'
import { ColectiiService } from 'src/app/Services/colectii.service';
import { Colectie } from 'src/app/Models/colectie';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  colectiiFromDB: Colectie[] = [];

  constructor(private router: Router, private colectieService: ColectiiService, public auth: AuthService) {}

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
