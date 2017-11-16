import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlbumPage} from '../album/album';

@IonicPage()
@Component({
  selector: 'page-albums',
  templateUrl: 'albums.html',
})
export class AlbumsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlbumsPage');
  }

  goToAlbum(){
    this.navCtrl.push(AlbumPage);
  }
  
}
