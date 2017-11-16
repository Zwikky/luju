import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GenrePage } from '../genre/genre';

@IonicPage()
@Component({
  selector: 'page-genres',
  templateUrl: 'genres.html',
})
export class GenresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenresPage');
  }

 goToGenre() {
   this.navCtrl.push(GenrePage);
 }

}
