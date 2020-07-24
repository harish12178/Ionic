import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user:User;
  flag:boolean=false;
  constructor(private router:Router,private service:UserService) {}

  username:string='';
  password:string='';
  handle_login(){

      if(this.username==''|| this.service.user.length<1){
        this.flag=true;
            }
      else{
        this.user=this.service.get_userbyId(this.username);
        console.log(this.user);
      if(this.password==this.user.pw){
        this.service.set_current_user(this.user.fname);
        this.password=null;
        this.flag=false;
        this.router.navigate(['/dashboard']);
        }
        else{
            this.flag=true;
         }
        
      }
    
  }
  handle_signup(){
    this.router.navigate(['/signup']);
  }

}
