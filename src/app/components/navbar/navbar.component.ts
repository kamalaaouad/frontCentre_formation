import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isStudent:boolean ;
  isAdmin:boolean ;
  constructor() {
    this.isStudent =Boolean(localStorage.getItem('isEtudiant'));
    this.isAdmin = Boolean(localStorage.getItem('isAdmin'));
    //location.reload(true);
  }

  ngOnInit(): void {
    //location.reload(true);
  }

}
