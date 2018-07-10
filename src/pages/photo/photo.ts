import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Platform } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html',
})

export class PhotoPage {
	
adresseImage : string = 'coucou'; 
base64Image : string = 'rien' ;

  constructor(public navCtrl: NavController, public  plat: Platform, public camera: Camera, 
  private transfer: FileTransfer, private file: File ) {
	  if (this.plat.is('cordova'))
{
	console.log('ok');
} else {
	console.log('ne detient pas cordova ');
}

// fin constructor
  }
  
 TakePicture(){
	 const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
};
	 console.log('TakePicture');
	 if (this.plat.is('cordova')){
		 this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
  this.base64Image = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
	console.log(err);
 // Handle error
}
	// fin de this.camera.getPicture
	);
	// fin de if 
			}else {
		console.log(this.adresseImage);
		this.adresseImage = "https://www.w3schools.com/w3css/img_lights.jpg";
				console.log('la camera ne fonctionne pas or platform cordova');

			}
			
// fin de TakePicture			
 }
 
 EnvoiPicture(){
	 const fileTransfer: FileTransferObject = this.transfer.create();
	 
	 if (this.plat.is('cordova')){
 let options: FileUploadOptions = {
     fileKey: 'ionicFile',
     fileName: this.base64Image,
	 mimeType: "image/jpeg",
     headers: {}
  };
			fileTransfer.upload(this.base64Image, 'https://famille-hirsch.c9users.io/famille/web/app_dev.php/transfer', options)
   .then((data) => {
     console.log(data);
   }, (err) => {
     console.log(err);
   })
   // fin de if cordova 
	 }else {
		 console.log('ceci est une application non équipé de cordova');
	 }
	 
// fin de EnvoiPicture	 
 }

}
