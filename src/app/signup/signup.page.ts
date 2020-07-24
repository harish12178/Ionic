import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,public service:UserService) { }

  flag:boolean=false;
  signup_form=this.fb.group({
    fname:['',Validators.required],
    lname:[''],
    age:[null],
    gender:[''],
    email:['',Validators.email],
    dept:[''],
    pw:[null,Validators.required]
  })
  ngOnInit() {
  }
  handle_submit(){
    this.service.save_user(this.signup_form.value);
    this.flag=true;
  }
  handle_back(){
    this.router.navigate(['/home']);
  }
}
