import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { Formation } from 'src/app/modeles/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  formations:Formation[]=[];
  formation:Formation ={
    libelle : "",
  description : "",
  prerequis : "",
  dateD :  new Date(),
  dateF : new Date(),
  catalogue : "",
  formateur : "",
  nbrelimit : 0,
  }

  constructor( private formationService:FormationService) { }

  ngOnInit(): void {
  }

  createFormation(){
    console.log(this.formation);
    this.formationService.Create(this.formation).subscribe(formation=>{
      console.log(formation);
    },
    error =>{
      console.log(error);
    }
    )
  }

}
