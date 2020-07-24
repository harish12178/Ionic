import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:User[]=[];
  current_user:string;
  constructor() { }

  save_user(data:User){
    this.user.push(data);
  }
  set_current_user(username){
    this.current_user=username;
  }
  get_user(){
    return this.current_user;
  }
  get_userbyId(username:string){
    for(var i=0;i<this.user.length;i++){
      if(username==this.user[i].fname){
        return this.user[i];
      }
    }
  }
}
