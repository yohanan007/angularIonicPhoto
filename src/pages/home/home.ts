import { Component, OnInit, Input } from '@angular/core';

import { NavController, Config } from 'ionic-angular';
import { AuthPage } from '../auth/auth'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

 @Input() isAuthentifie : string;
  constructor(public navCtrl: NavController, public config: Config) {

  }

 ngOnInit(){
	 this.IsAuthentifie();
 }
 
 IsAuthentifie(){
	 if (this.isAuthentifie !== 'true')
	 {
		  this.config.set('tabsHideOnSubPages', false);
		 this.navCtrl.push(AuthPage);
	 }
 }
  
}
