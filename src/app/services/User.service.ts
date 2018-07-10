import { User } from '../models/User.model';
import { NavController, Config } from 'ionic-angular';

import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class userService {
	
	public users:User[] = [];
	public authentifier: boolean = false; 
	userSubject = new Subject<User[]>();
	
	emitUsers(){
		this.userSubject.next(this.users.slice());
	}
	
	addUser(user:User) {
    this.users.push(user);
	this.authentifier = true; 
    this.emitUsers();
  }
	
	constructor(private httpClient: HttpClient ){}
	
	verifInscription(userF1: User){	
	console.log('valeur entrée:' + userF1);
	console.log('user' + userF1.user);
return new Promise ((resolve,reject)=>{ return this.httpClient.get<any[]>('https://famille-hirsch.c9users.io/famille/web/app_dev.php/authentification'
		+ '?user=' + userF1.user + '&mdp=' + userF1.mot_de_passe).toPromise().then(data => {// reussite
			console.log('reponse du serveur' + data);
			const aut1 = data.authentification;
			console.log(aut1);
			if ( aut1 === 'ok' ){
				
				resolve(data);
			}else{
				resolve('authentification mauvaise');
			}
		}, msg => {// ERROR 
			reject(msg);
		}); 
	}); 
		
	}
	// fin fonction verifInscription
	
	// début function verifGuard
	// fonction verifiant que la personne est bien authentifié est renvoie true ou false
	verifGuard(){
		const auth = this.users[0].isAuth; 
		if (auth === 'true')
		{
			return true;
		}
		else {
			
			return false;
		}
	}
	// fin fonction verifGuard
	
	deconnexion(){
		return this.users = [];
		this.emitUsers();
	}
	
	
	
}