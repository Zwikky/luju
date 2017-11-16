import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp,IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { GenresPage } from '../pages/genres/genres';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { InternationalPage } from '../pages/international/international';
import { AccountPage } from '../pages/account/account';
import { AlbumsPage } from '../pages/albums/albums';

import { AlbumPage} from '../pages/album/album';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    DashboardPage,
    GenresPage,
    AlbumsPage,
    AlbumPage,
    InternationalPage,
    AccountPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    DashboardPage,
    GenresPage,
    AlbumsPage,
    AlbumPage,
    InternationalPage,
    AccountPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
