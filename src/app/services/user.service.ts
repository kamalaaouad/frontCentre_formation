import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../modeles/users';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  appUrl="http://localhost:8083/user";
  constructor(private http : HttpClient) { }
  public create(user: Users): Observable<any>{
    console.log(user);
    return this.http.post<Users>(`${this.appUrl}/create`,user);
  }
  public userIsExiste(user: Users): Observable<any>{
    console.log(user);
    return this.http.post<Users>(`${this.appUrl}/verified`,user) ;
  }
}
