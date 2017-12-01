import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu.swipeEnable(false);
  }

  doLogin(){
  	this.navCtrl.setRoot('MenuPage');
  }

  goToSettings(){
  	let nav = this.app.getRootNav();
  nav.setRoot('SettingsPage');
  }

}
