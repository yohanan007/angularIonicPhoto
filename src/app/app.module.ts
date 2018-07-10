import { NgModule, ErrorHandler } from '@angular/core';
import { OnInit, Input } from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FormBuilder, FormGroup } from '@angular/forms';

import { BibliothéquePage} from '../pages/bibliothéque/bibliothéque';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PhotoPage } from '../pages/photo/photo';
import { AuthPage } from '../pages/auth/auth';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Platform } from 'ionic-angular';

import { HttpClientModule } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions, URLSearchParams } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { bibliothequeService } from './services/Bibliothéque.service';
import { userService } from './services/User.service';
import { User } from './models/User.model';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';


@NgModule({
  declarations: [
  
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
	AuthPage,
	PhotoPage,
	BibliothéquePage,
    TabsPage
	
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
    IonicModule.forRoot(MyApp, {tabsHideOnSubPages: true})],
	
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
	AuthPage,
    HomePage,
	PhotoPage,
	BibliothéquePage,
    TabsPage,
	
  ],
  providers: [
    StatusBar,
    SplashScreen,
	Camera,
	HttpClient,
	userService,
	bibliothequeService,
	File,
	FileTransfer, 
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
