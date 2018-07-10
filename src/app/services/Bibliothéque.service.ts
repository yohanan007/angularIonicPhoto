import { Bibliotheque } from '../models/Bibliotheque.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class bibliothequeService{
	
	
	adresse: string = 'https://famille-hirsch.c9users.io/famille/web/app_dev.php/bibliothequeApi';
	utilisateur: string = 'yohanan';
	mdp : string = '231081'; 
	options : string;
	bibliotheque : Bibliotheque;
	bibliotheques: Bibliotheque[] = [];
	
	bibliothequeSubject  = new Subject<Bibliotheque[]>();
	
	emitBibliotheques(){
		this.bibliothequeSubject.next(this.bibliotheques.slice());
	}
	
constructor(private http: HttpClient){
	
}	
// utilisateur
	setUtilisateur(util: string){
		console.log('utilisateur entrée:' + this.utilisateur);
		this.utilisateur = util; 
		console.log('utilisateur sorti: ' + this.utilisateur);
	}
// mot de passe 	
	setMdp(motdepasse: string){
		console.log('mdp entrée: ' + this.mdp);
		this.mdp = motdepasse;
		console.log('mdp sortie: ' + this.mdp);
	}

// fonction de gestion de reponse des images 
   reponsse(){
	   this.options = '?user=' + this.utilisateur + '&mdp=' + this.mdp;
	   console.log('options : ' + this.options);
   this.http.get(this.adresse + this.options).subscribe((response)=>{ console.log(response);
   
   this.imageTab(response);
   return response; },(error)=>{console.log(error); 
   return false; });
  }
  
  // fonction d'ajout de une image dans le tableau gerant les images
  addTab(bibliotheque1: Bibliotheque){
	  console.log('debut du processus addTab');
	  this.bibliotheques.push(bibliotheque1);
    this.emitBibliotheques();
  }
  
  
	// fonction d'ajout de toute les images dans le tableau
  imageTab(variablesJson){
	  console.log('debut du processus imageTab');
	  console.log('variables d entree' + variablesJson);
	 // const variablesDecode = JSON.parse(variablesJson);
	  // console.log('variable decode' + variablesDecode);
	  variablesJson.forEach(function(element){
		  console.log('element' + element);
		  console.log(element.id);
		  console.log(element.mdp);
		  console.log(element.user);
		  console.log(element.url);
		  //this.bibliotoheque = new Bibliotheque(element.id, element.mdp, element.user, element.adresse);
		 // this.addTab(this.bibliotheque)
	  });
	  console.log('fin du processus imageTab');
  }
  
  // fonction de suppression d'une image dependant de l'auteur et de l'id de l'image
  supprImage(){
	  
  }


}