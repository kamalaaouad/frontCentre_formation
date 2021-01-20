import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/modeles/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
    userlogin : Users[]=[];
    userExiste: boolean=false;
    erreur:boolean=false;
    user : Users={
      name:"",
    email:"",
    password:"",
    tele : " ",
    role:"user"
    }
    userConnected:Users;
  constructor(private userService: UserService, private router:Router) {
    localStorage.setItem('isConnected', 'false');
    localStorage.removeItem('isConnected');
    for (let i = 0; i < localStorage.length; i++){
      let clef = localStorage.key(i);
      let valeur = localStorage.getItem(clef);
      if(clef==="isConnected")
      console.log(clef,JSON.stringify(valeur) );
      }
  }

  ngOnInit(): void {
    for (let i = 0; i < localStorage.length; i++){
      let clef = localStorage.key(i);
      let valeur = localStorage.getItem(clef);
      if(clef==="currentUser")
      console.log(clef,JSON.stringify(valeur) );
      }
     // location.reload(true);
  }
  isUser(){
    //console.log(this.user);
    this.userService.userIsExiste(this.user).subscribe((user)=>{
      if(user != null){
        this.userConnected=user;
        localStorage.setItem('currentUser', JSON.stringify(this.userConnected));
       // this.isAuthenticated(this.userConnected);
        console.log(this.userConnected.role)
        if(this.userConnected.role==="user")
        {
          localStorage.setItem('isEtudiant','true');
          localStorage.removeItem('isAdmin')
          //location.reload(true);
           this.router.navigateByUrl('');

        }else
        {
          console.log("hhhhhhhhhhhhhhhhhhhhhh")
          this.isAuthenticated(this.userConnected);
          localStorage.removeItem('isEtudiant');
          localStorage.setItem('isAdmin','true');
          this.router.navigateByUrl('admin');

        }
      }else
      console.log("ni pas trouver");
    },
    error=>{
      console.error(error);
    }
    );

  }

  isAuthenticated(userc:Users) {
   // this.isUser();
    if (this.user.email === userc.email && this.user.password===userc.password) {
    localStorage.setItem('isConnected', 'true');
    localStorage.setItem('currentUser', JSON.stringify(this.user));
    //this.router.navigateByUrl('contact');
    } else {
    this.erreur = false;
    }
    }

}
