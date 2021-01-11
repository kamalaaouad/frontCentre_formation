import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/modeles/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Users : Users[]=[];
  user : Users = {
    name:"",
    email:"",
    password:"",
    tele : " ",
    role:"user"
  }
  cfpassword :string;
  passwordIsCorrect:boolean=false;
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    console.log("ngOnInit");
  }
  CreateUser(){
    console.log(this.user);
    // if(this.cfpassword==this.user.password){
      this.userservice.create(this.user).subscribe(user=>{
        console.log(user);
        // this.Users=[user,...this.Users]
      }, error => {
        console.log(error);
      });
      this.resetForm();
    // }else{
    //     this.passwordIsCorrect=true;
    // }
  }
  resetForm(){
    this.user ={
       name:"",
       email:"",
       password:"",
       tele:"",
       role:"user"
   }
   this.passwordIsCorrect=false;
   this.cfpassword ="";
   }

}
