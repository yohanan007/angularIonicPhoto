import { Component, NgModule, OnInit } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { User } from '../../app/models/User.model';
import { Component, OnInit } from '@angular/core';
import { NavController, Config } from 'ionic-angular';
import { userService } from  '../../app/services/User.service'; 
import { bibliothequeService } from  '../../app/services/Bibliothéque.service';
import { AuthPage } from '../auth/auth';

@Component({
  selector: 'page-bibliothéque',
  templateUrl: 'bibliothéque.html',
})

export class BibliothéquePage implements OnInit {

	isAuth: string; 
	
  constructor(public navCtrl: NavController,
  public bibliothéque: bibliothequeService,
  public UserService: userService,
  public config: Config) {
  }

 ngOnInit(){ 
	 this.imageBibliothéque();
 }
 
 imageBibliothéque(){
	 this.isAuth =  this.UserService.verifGuard();
	 if (this.isAuth === true)
	 {
		 var reponse = this.bibliothéque.reponsse();
		 const a = 'false';
	 }else {
		 this.config.set('tabsHideOnSubPages', false);
		 this.navCtrl.push(AuthPage);
	 }
 }
 
}
