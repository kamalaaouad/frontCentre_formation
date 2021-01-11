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
   /* localStorage.setItem('isConnected', 'false');
    localStorage.removeItem('isConnected');
    for (let i = 0; i < localStorage.length; i++){
      let clef = localStorage.key(i);
      let valeur = localStorage.getItem(clef);
      if(clef==="isConnected")
      console.log(clef,JSON.stringify(valeur) );
      }*/
  }

  ngOnInit(): void {
    /*for (let i = 0; i < localStorage.length; i++){
      let clef = localStorage.key(i);
      let valeur = localStorage.getItem(clef);
      if(clef==="isConnected")
      console.log(clef,JSON.stringify(valeur) );
      }*/
  }
  isUser(){
    //console.log(this.user);
    this.userService.userIsExiste(this.user).subscribe((user)=>{
      if(user != null){
        this.userConnected=user;
        this.isAuthenticated(this.userConnected);
        //console.log(this.userConnected.name)
        //this.userExiste =true;
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
    this.router.navigateByUrl('contact');
    } else {
    this.erreur = false;
    }
    }

}
