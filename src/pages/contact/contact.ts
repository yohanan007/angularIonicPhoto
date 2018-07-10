import { Component, OnInit } from '@angular/core';
import { NavController, Config } from 'ionic-angular';
import { User } from '../../app/models/User.model';
import { userService } from  '../../app/services/User.service'; 
import { AuthPage } from '../auth/auth';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit {

	user:any[];
	nom:string;
	isAuth: string;
	
  constructor(public navCtrl: NavController, public UserService: userService, public config: Config) {

  }
  
  ngOnInit() {
	  this.verif();
}

async verif(){
	
	this.isAuth = this.UserService.verifGuard();
	console.log('users : '  + this.UserService.users[0].isAuth);
	console.log('variable verif: ' + this.isAuth);
	if(this.isAuth === true)
	{
		return true;
	}
	else{
		 this.config.set('tabsHideOnSubPages', false);
		 this.navCtrl.push(AuthPage);
	}
	
}



}