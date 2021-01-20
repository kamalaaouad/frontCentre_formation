import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../modeles/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  appUrl="http://localhost:8083/formation";
  constructor(private http:HttpClient) { }

  public Create(formation:Formation) : Observable<any>{
    console.log(formation);
    return this.http.post<Formation>(`${this.appUrl}/create`,formation);
  }
}
