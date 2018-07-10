import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { PhotoPage } from '../photo/photo';
import { AuthPage } from '../auth/auth';
import { BibliothéquePage } from '../bibliothéque/bibliothéque';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = PhotoPage;
	tab5Root = AuthPage;
  tab6Root = BibliothéquePage;
  constructor() {

  }
}
