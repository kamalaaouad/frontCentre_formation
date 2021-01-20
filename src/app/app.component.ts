import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
            isStudent:boolean =Boolean(localStorage.getItem('isEtudiant'));
            isAdmin:boolean = Boolean(localStorage.getItem('isAdmin'));

  ngOnInit(): void {
   console.log(this.isAdmin);
   console.log(this.isStudent);
  }
}
