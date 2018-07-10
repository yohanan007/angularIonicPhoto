import { Component, OnInit, Input } from '@angular/core';
import { NavController, Config, App } from 'ionic-angular';
import { User } from '../../app/models/User.model';
import { userService } from  '../../app/services/User.service'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactPage } from '../contact/contact';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage implements OnInit {
	
	user: User[]; 
	userForm : FormGroup;
	
  constructor(public navCtrl: NavController, public UserService: userService, private formBuilder : FormBuilder, public config: Config , public app: App) {
	  
  }
  
  ngOnInit(){
	  this.initForm();
	
  }

	initForm(){
		 this.userForm = this.formBuilder.group({
			 user : ['', Validators.required],
			 mot_de_passe : ['', Validators.required]
		 }); 
	}

		OnSubmit(){
			console.log("button de soumission");
			const formValue =  this.userForm.value ; 
		const userF = new User(formValue['user'],formValue['mot_de_passe'],'true');
		 
			
			this.UserService.verifInscription(userF).then((response) => {
				console.log('response recu par la fonction' + response);
				if (response.authentification !== undefined)
				{
					const auth1 = response.authentification; 
					if (auth1 === 'ok')
					{
						console.log('variable auth1'  + auth1);
						this.UserService.addUser(userF);
						this.navCtrl.setRoot(ContactPage);
					}
					else {
						return false;
					}
				}
			}, (error) => { 
			
			console.log('erreur recu : ' + error);
			return false;
			
			});		
		console.log("user integrer"  + userF);
			console.log('user recu:' + formValue['user']);
			console.log('mot de passe recu: ' + formValue['mot_de_passe']);
		}

}
