import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { GenresPage } from '../genres/genres';
import { DashboardPage } from '../dashboard/dashboard';
import { InternationalPage } from '../international/international';
import { AccountPage } from '../account/account';
import { AlbumsPage } from '../albums/albums';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DashboardPage;
  tab2Root = GenresPage;
  tab3Root = AlbumsPage;
  tab4Root = InternationalPage;
  tab5Root = AccountPage;


  constructor() {

  }
}
