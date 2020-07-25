import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
    index:number=0;
    Actualotp:string="0976";
    Receivedotp:string="";
    wrongotp:boolean=false;
    digit:string[]=["","","",""];
  constructor(private router:Router) { }

  ngOnInit() {
    this.index=0;
  }
handle_track(){
  for(var i in this.digit){
    this.Receivedotp+=this.digit[i];
    }
console.log(this.Receivedotp);
  if(this.Actualotp==this.Receivedotp){
    this.wrongotp=false;
    this.digit=["","","",""];
    this.index=0;
    this.Receivedotp="";
    this.router.navigate(['/track']);
    }
    else{
        console.log("wrong otp !");
        this.wrongotp=true;
        this.digit=["","","",""];
        this.index=0;
        this.Receivedotp="";
       }
}

add_key(key){
if(this.index>=4){
return;
}
this.wrongotp=false;
this.digit[this.index++]=key;
}
remove_key(){
if(this.index<0){
return;
}
if(this.index==0){
this.digit[0]="";
return;
}
this.digit.pop();
this.index-=1;
}

}
