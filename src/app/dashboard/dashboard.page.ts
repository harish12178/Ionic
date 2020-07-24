import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

import {Plugins,CameraResultType,CameraSource} from '@capacitor/core'
import {DomSanitizer,SafeResourceUrl} from '@angular/platform-browser'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
    flag:boolean=false;
  username:string;
  photo:SafeResourceUrl;
  constructor(public service:UserService,public router:Router,private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.username=this.service.get_user();
  }
  handle_logout(){
    this.router.navigate(['/home']);
  }
  async clickPicture(){
    this.flag=true;
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt
    });
    
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));

  }

}
