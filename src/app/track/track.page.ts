import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';



declare var google;

@Component({
  selector: 'app-track',
  templateUrl: './track.page.html',
  styleUrls: ['./track.page.scss'],
})
export class TrackPage implements OnInit, AfterViewInit {
  flag: boolean = false;
  map;

  @ViewChild('mapElement', { static: true }) mapNativeElement: ElementRef;

  constructor(private router: Router,private menu: MenuController) { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
      zoom: 15,
      center: { lat: 12.9716, lng: 77.5946}
    });

  }

toggle_flag(){
  this.flag = !this.flag;
}
handle_tiip(){
  this.router.navigate(['/trip']);
}
openmenu() {
    this.menu.open('menu');
  }


}

